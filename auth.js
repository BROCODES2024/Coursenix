const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.jwtsec;
function auth(req, res, next) {
  const token = req.headers.token;
  const response = jwt.verify(token, JWT_SECRET);
  if (response) {
  } else {
    res.status(403).json({
      msg: "Invalid Credentials",
    });
  }
}
module.exports = {
  auth,
  JWT_SECRET,
};
