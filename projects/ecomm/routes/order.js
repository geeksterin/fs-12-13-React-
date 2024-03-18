const express = require("express");

const orderController = require("../controllers/order");

const router = express.Router();

router.post("/", orderController.createOrder);

router.get("/", orderController.getOrder);

router.post("/payment/payment-status", (req, res) => {
  const body = req.body;
});

module.exports = router;
