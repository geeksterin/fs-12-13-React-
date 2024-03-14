const express = require("express");

const cartController = require("../controllers/cart");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post(
  "/",
  authMiddleware(["admin", "seller", "buyer"]),
  cartController.createCart
);

router.get(
  "/",
  authMiddleware(["admin", "seller", "buyer"]),
  cartController.getCart
);

module.exports = router;
