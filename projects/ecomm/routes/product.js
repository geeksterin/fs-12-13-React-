const express = require("express");

const productController = require("../controllers/product");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/", authMiddleware(["admin"]), productController.createProduct);

router.patch("/", authMiddleware(["seller"]), productController.editProduct);

router.get(
  "/",
  authMiddleware(["buyer", "seller"]),
  productController.getProduct
);

module.exports = router;
