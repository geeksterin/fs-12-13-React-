const jwt = require("jsonwebtoken");
const ProductModel = require("../models/product");

const createProduct = async (req, res) => {
  const newProduct = await ProductModel.create(req.body);
  res.json({
    suceess: true,
    message: "Dumy product create API",
  });
};

const getProduct = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy get product API",
  });
};

const editProduct = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy edit product API",
  });
};

const likeDislikeController = async (req, res) => {
  console.log(req.user);
  // ProductModel.update({_id: },{ $set: {} });

  let updateObject = {
    $push: { likes: req.user._id },
    $pull: { dislikes: req.user._id },
    $inc: { likesCount: 1 }
  };
  

  if (req.params.action === "dislike") {
    updateObject = {
      $push: { dislikes: req.user._id },
      $pull: { likes: req.user._id },
      $inc: { likesCount: -1 }
    };
  }
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    req.params.productId,
    updateObject
  );

  res.json({
    success: true,
    message: "Product liked",
  });
};

const productDetailsController = async (req, res) => {
  console.log(req.query.productId);
  const productDetails = await ProductModel.findById(req.query.productId)
    .populate("likes")
    .populate("dislikes");
  res.json({
    success: true,
    message: "Dummy product details API",
    result: productDetails,
  });
};

const controllers = {
  createProduct,
  getProduct,
  editProduct,
  likeDislikeController,
  productDetailsController,
};

module.exports = controllers;
