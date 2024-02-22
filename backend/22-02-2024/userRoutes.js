const express = require("express");

const router = express.Router();

router.get("/order-history", (req, res) => {
  res.json({
    success: true,
    message: "Order History API",
  });
});

module.exports = router;
