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
});

const deliveryAddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: false,
    deault: "",
  },
  city: {
    type: String,
    requied: false,
    default: "",
  },
  state: {
    type: String,
    requied: false,
    default: "",
  },
  pincode: {
    type: String,
    requied: false,
    default: "",
  },
});

const orderSchema = new mongoose.Schema({
  cart: {
    type: cartSchema,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  coupon: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    default: null,
  },
  deliveryAddress: {
    type: deliveryAddressSchema,
    required: true,
  },
  orderPlacedAt: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  modeOfPayment: {
    type: String,
    required: true,
  },
  transctionId: {
    type: String,
    required: false,
    default: "",
  },
});

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = OrderModel;
