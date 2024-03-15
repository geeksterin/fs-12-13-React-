const CouponModel = require("../models/coupon");

const createCoupon = async (req, res) => {
  console.log(req.body);
  await CouponModel.create(req.body);
  res.json({
    success: true,
    message: "Coupon created scucessfully",
  });
};

const getCoupon = async (req, res) => {
  const couponsList = await CouponModel.find({ isActive: true });
  res.json({
    success: true,
    message: "List of coupons",
    result: couponsList,
  });
};

const controllers = {
  createCoupon,
  getCoupon,
};

module.exports = controllers;
