// const express = require("express");
// const Router = express.Router;
//the below line is same as cobining above two lines
const { Router } = require("express");
const { z } = require("zod");
const courserouter = Router();
const { usermiddleware } = require("../middlewares/usermw");
const { purchasemodel, coursemodel } = require("../db");

courserouter.post("/purchase", usermiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;
  await purchasemodel.create({
    userId,
    courseId,
  });
  res.json({
    msg: "bought the course!",
  });
});
courserouter.get("/preview", async (req, res) => {
  const courses = await coursemodel.find({});
  res.json({
    courses,
  });
});
module.exports = {
  courserouter: courserouter,
};
