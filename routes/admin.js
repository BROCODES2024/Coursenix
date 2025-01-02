const bcrypt = require("bcrypt");
const { Router } = require("express");
const { adminmodel } = require("../db");
const { coursemodel } = require("../db");

const jwt = require("jsonwebtoken");
const adminrouter = Router();
const { z } = require("zod");
const { adminmiddleware } = require("../middlewares/adminmw");
const adminsecret = process.env.jwtsecadmin;

adminrouter.post("/signup", async (req, res) => {
  // this is zod schema
  const reqbody2 = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(30),
    firstname: z.string().min(3).max(30),
    lastname: z.string().min(3).max(30),
  });
  const parseddatawithsuccess = reqbody2.safeParse(req.body);
  if (!parseddatawithsuccess.success) {
    res.json({
      msg: "Incorrect Format",
      //it gives zod error if there is wrong input
      error: parseddatawithsuccess.error,
    });
    return;
  }
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  let errorthrown = false;
  try {
    const hashedpassword = await bcrypt.hash(password, 5);
    console.log(hashedpassword);
    await adminmodel.create({
      email: email,
      password: hashedpassword,
      firstname: firstname,
      lastname: lastname,
    });
  } catch (e) {
    res.json({
      message: "admin already exists",
    });
    errorthrown = true;
  }
  if (!errorthrown) {
    res.json({
      message: "you are signed up",
    });
  }
});
adminrouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const response = await adminmodel.findOne({
    email: email,
  });
  if (!response) {
    res.status(403).json({
      msg: "admin dosen't exist",
    });
    return;
  }
  const passwordmatch = await bcrypt.compare(password, response.password);
  if (passwordmatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      adminsecret
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "incorrect creds",
    });
  }
});

//look at harkirat code and make changes
adminrouter.post("/create-course", adminmiddleware, async (req, res) => {
  const adminId = req.adminId;
  const { title, description, imageurl, price } = req.body;
  const course = await coursemodel.create({
    title: title,
    description: description,
    imageurl: imageurl,
    price: price,
    creatorid: adminId,
  });
  res.json({
    message: "course created",
    courseid: course._id,
  });
});
adminrouter.put("/update-course", adminmiddleware, async (req, res) => {
  const adminId = req.adminId;
  const { title, description, imageurl, price, courseid } = req.body;

  const course = await coursemodel.updateOne(
    {
      _id: courseid,
      creatorid: adminId,
    },
    {
      title: title,
      description: description,
      imageurl: imageurl,
      price: price,
    }
  );
  res.json({
    message: "course updated",
    courseid: course._id,
  });
});
adminrouter.get("/course/bulk", adminmiddleware, async (req, res) => {
  const adminId = req.adminId;
  const courses = await coursemodel.find({
    creatorid: adminId,
  });
  res.json({
    message: "course updated",
    courses,
  });
});
module.exports = {
  adminrouter: adminrouter,
};
