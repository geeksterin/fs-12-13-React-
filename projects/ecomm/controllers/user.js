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

const addProductToWishlist = async (req, res) => {
  // console.log()
  const updateObject = {
    $push: {
      wishlist: req.body.productId,
    },
  };
  await UserModel.findByIdAndUpdate(req.user._id, updateObject);
  res.json({
    success: true,
    message: "Product added to wishlist",
  });
};

const getUserWishlist = async (req, res) => {
  const user = await UserModel.findById(req.user._id, "wishlist").populate(
    "wishlist",
    "title price"
  );
  res.json({
    success: true,
    result: user,
  });
};

const saveUserAddress = async (req, res) => {
  const address = req.body;
  const setObject = {};

  if (address.address) {
    setObject["address.address"] = address.address;
  }

  if (address.city) {
    setObject["address.city"] = address.city;
  }

  if (address.state) {
    setObject["address.state"] = address.state;
  }

  if (address.pincode) {
    setObject["address.pincode"] = address.pincode;
  }

  const updateObject = {
    $set: setObject,
  };

  const updateResult = await UserModel.findByIdAndUpdate(
    req.user._id,
    updateObject
  );
  console.log(updateResult);
  res.json({
    success: true,
    message: "Dummy Save address API",
  });
};

const controllers = {
  userRegistration,
  userLogin,
  userLogout,
  addProductToWishlist,
  getUserWishlist,
  saveUserAddress,
};

module.exports = controllers;
