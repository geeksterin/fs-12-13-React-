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

router.post(
  "/:productId/review",
  authMiddleware(["admin", "buyer", "seller"]),
  productController.reviewProductController
);

router.post(
  "/:productId/:action",
  authMiddleware(["buyer", "seller", "admin"]),
  productController.likeDislikeController
);

router.get("/product-by-id", productController.productDetailsController);

module.exports = router;
