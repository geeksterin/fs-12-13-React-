const express = require("express");

const router = express.Router();

router.get("/modify", (req, res) => {
  res.json({
    success: true,
    message: "Cart Modify API",
  });
});

router.get("/list", (req, res) => {
  res.json({
    success: true,
    message: "Cart List API",
  });
});

router.get("/delete", (req, res) => {
  res.json({
    success: true,
    message: "Cart Delete API",
  });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "Post API success",
  });
});

module.exports = router;
