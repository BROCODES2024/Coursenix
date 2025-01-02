const jwt = require("jsonwebtoken");
const jwtadminmwsec = process.env.jwtsecadmin;
function adminmiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, jwtadminmwsec);
  if (decoded) {
    //here decoded.id comes from  sigin endpoint in admin.js where we sent token as result which has id
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({
      msg: "not signed in",
    });
  }
}
module.exports = {
  adminmiddleware: adminmiddleware,
};
