const mongoose = require("mongoose");

const cartProduct = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const cartSchema = new mongoose.Schema({
  products: {
    type: [cartProduct],
  },
  cartTotal: {
    type: Number,
    required: false,
    default: 0,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
