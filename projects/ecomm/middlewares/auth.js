const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

// function authMiddleware(role) {
//   return function(req,res,next) {

//   }
// }

const authMiddleware = (role) => async (req, res, next) => {
  try {
    const tokenFromHeaders = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(tokenFromHeaders, process.env.JWT_SECRET_KEY);
    // console.log("TOKEN", tokenFromHeaders);
    const payload = jwt.decode(tokenFromHeaders);
    if (role.includes(payload.role)) {
      const user = await UserModel.findById(payload.id);
      // console.log("USER", user);
      req.user = user;
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }
};

module.exports = authMiddleware;
