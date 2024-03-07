const bcrypt = require("bcrypt");

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
  console.log(user.password);

  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    user.password
  );
  console.log(isPasswordCorrect);

  if (isPasswordCorrect) {
    return res.json({
      success: true,
      message: "Logged in successfully",
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
