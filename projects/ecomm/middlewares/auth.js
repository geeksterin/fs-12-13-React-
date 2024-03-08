const jwt = require("jsonwebtoken");

// function authMiddleware(role) {
//   return function(req,res,next) {

//   }
// }

const authMiddleware = (role) => (req, res, next) => {
  try {
    const data = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    const tokenFromHeaders = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(tokenFromHeaders);
    if (role.includes(payload.role)) {
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
