const dayjs = require("dayjs");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");

dotenv.config();

// Initialize payment gateway
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const OrderModel = require("../models/order");
const CartModel = require("../models/cart");
const CouponModel = require("../models/coupon");

const createOrder = async (req, res) => {
  /**
   * 1. Extract user cart by user Id
   * 2. Get Cart Total and Apply coupon (if available) => payableAmount
   * 3. Check the mode of payment (If COD, skip payment else Redirect user to payment gateway)
   * 4. Check the delivery address (if given in body use it else fetch it from user's saved address)
   * 5. Delete the user cart on successful order
   * 6. Inventory / Stock values to be updated
   */

  const userCart = await CartModel.findOne({ userId: req.user._id });
  if (!userCart) {
    return res.status(400).json({
      success: false,
      message: "Empty cart, please add items to cart",
    });
  }

  const couponCode = req.body.coupon;
  const coupon = await CouponModel.findOne({ couponCode, isActive: true });
  if (!coupon) {
    return res.status(400).json({
      success: false,
      message: "Invalid coupon code",
    });
  }

  /**
   * 1. Is coupon between start and end date of the coupon
   * startDate < currentDate && endDate > currentDate
   */
  const couponStartDate = dayjs(coupon.startDate);
  const couponEndDate = dayjs(coupon.endDate);
  const currentDateTime = dayjs();

  if (
    currentDateTime.isBefore(couponStartDate) ||
    currentDateTime.isAfter(couponEndDate)
  ) {
    return res.status(400).json({
      success: false,
      message: "Coupon expired",
    });
  }

  let couponDiscountInRs = (
    (userCart.cartTotal / 100) *
    coupon.discountPercentage
  ).toFixed(2);

  if (couponDiscountInRs > coupon.maxDiscountInRs) {
    couponDiscountInRs = coupon.maxDiscountInRs;
  }

  const amount = (userCart.cartTotal - couponDiscountInRs).toFixed(2); // Total payable amount

  let deliveryAddress = req.body.deliveryAddress;
  if (!deliveryAddress) {
    deliveryAddress = req.user.address;
  }

  const deliveryDate = dayjs().add(7, "day");
  //Order Status Values => PALCED, PACKED, SHIPPED, IN_TRANSIT, OUT_FOR_DELIVERY, DELIVERED, RETURNED, REFUND_AWAITED, REFUND_INITATED, REFUND_RECEIVED
  const orderDetails = {
    cart: userCart,
    userId: req.user._id,
    amount,
    coupon: coupon._id,
    deliveryAddress,
    orderPlacedAt: currentDateTime,
    deliveryDate,
    orderStatus: "PALCED",
    modeOfPayment: req.body.modeOfPayment,
  };

  const newOrder = await OrderModel.create(orderDetails);
  let pgResponse;
  if (req.body.modeOfPayment === "COD") {
    // Don't generate transaction ID and don't redirect to payment gateway
  } else {
    // TODO : Redirec the user to payment gateway
    const options = {
      amount: amount * 100, // Amount in paisa E.g 50Rs = 5000
      currency: "INR",
      receipt: newOrder._id, // Unique Ordre ID
      payment_capture: 1, // Ignore
    };
    console.log("OPITONS", options);
    try {
      pgResponse = await razorpay.orders.create(options);
      console.log("RAZORPAY pgResponse", pgResponse);
    } catch (err) {
      console.log(err);
    }
  }

  res.json({
    success: true,
    message: "Order placed successfully",
    orderId: newOrder._id,
    paymentInformation: {
      amount: pgResponse.amount_due,
      orderId: pgResponse.id,
      currency: pgResponse.currency,
    },
  });
};

const getOrder = async (req, res) => {
  res.json({
    success: true,
    message: "Get order API",
  });
};

const controllers = {
  createOrder,
  getOrder,
};

module.exports = controllers;
