const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/user");

const userRegistration = async (req, res) => {
  /**
   * 1. Generate Salt
   * 2. Generate hash using salt
   */

  const newUser = new UserModel({
    ...req.body,
  });

  await newUser.save();
  res.json({
    success: true,
    message: "User successfully registered, please login to continue",
  });
};

const userLogin = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    return res.json({
      success: false,
      message: "Invalid username or password",
    });
  }

  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  const expiryDateTime = Math.floor(new Date().getTime() / 1000) + 7200; // 1 hr from now

  if (isPasswordCorrect) {
    const payload = {
      id: user._id,
      name: user.firstname,
      role: user.role,
      exp: expiryDateTime,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    return res.json({
      success: true,
      message: "Logged in successfully",
      token,
    });
  }
  res.json({
    success: false,
    message: "Invalid username or password",
  });
};

const userLogout = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy Logout API",
  });
};

const controllers = {
  userRegistration,
  userLogin,
  userLogout,
};

module.exports = controllers;
