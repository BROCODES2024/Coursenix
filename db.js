const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
require("dotenv").config();

const userschema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});
const adminschema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});
const courseschema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageurl: String,
  creatorid: ObjectId,
});
const purchaseschema = new Schema({
  userid: ObjectId,
  courseid: ObjectId,
});

const usermodel = mongoose.model("user", userschema);
const adminmodel = mongoose.model("admin", adminschema);
const coursemodel = mongoose.model("course", courseschema);
const purchasemodel = mongoose.model("purchase", purchaseschema);

module.exports = {
  usermodel: usermodel,
  adminmodel: adminmodel,
  coursemodel: coursemodel,
  purchasemodel: purchasemodel,
};
