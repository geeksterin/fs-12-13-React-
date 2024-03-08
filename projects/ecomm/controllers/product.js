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

const controllers = {
  createProduct,
  getProduct,
  editProduct,
};

module.exports = controllers;
