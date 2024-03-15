const express = require("express");

const couponController = require("../controllers/coupon");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/", authMiddleware(["admin"]), couponController.createCoupon);

router.get("/", couponController.getCoupon);

module.exports = router;
