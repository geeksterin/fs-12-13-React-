const CartModel = require("../models/cart");
const ProductModel = require("../models/product");

const createCart = async (req, res) => {
  console.log(req.body.products);
  const userCart = await CartModel.findOne({ userId: req.user._id });
  if (userCart) {
    // Cart exists
  } else {
    // Cart doesn't exists
    let cartTotal = 0;
    const productsToAdd = [];
    for (let i = 0; i < req.body.products.length; i++) {
      const currentProduct = req.body.products[i];
      const { price } = await ProductModel.findById(currentProduct.productId, {
        price: 1,
        _id: 0,
      });

      const product = {
        ...currentProduct,
        price,
      };
      productsToAdd.push(product);
      const priceForProduct = currentProduct.quantity * price;
      cartTotal += priceForProduct;
    }

    await CartModel.create({
      products: productsToAdd,
      cartTotal: cartTotal,
      userId: req.user._id,
    });
  }
  res.json({
    success: true,
    message: "User cart updated successfully",
  });
};

const getCart = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy get cart API",
  });
};

const controllers = {
  createCart,
  getCart,
};

module.exports = controllers;
