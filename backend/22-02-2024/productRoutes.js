const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    success: true,
    message: "Product List API",
  });
});

router.get("/modify", (req, res) => {
  res.json({
    success: true,
    message: "Product Modify API",
  });
});

module.exports = router;
