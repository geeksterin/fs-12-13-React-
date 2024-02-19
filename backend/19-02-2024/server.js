const express = require("express");

const app = express();

app.get("/product-list", (req, res) => {
  const output = {
    success: true,
    results: [
      {
        id: 1,
        name: "T-Shirt",
      },
      {
        id: 2,
        name: "Shoes",
      },
    ],
  };
  res.json(output);
});

app.post("/product-list", (req, res) => {
  const output = {
    success: true,
    results: [],
    message: "This is dummy post api",
  };
  res.json(output);
});

app.get("/order-history", (req, res) => {
  const output = {
    success: true,
    results: [
      {
        orderId: 123,
        name: "T-Shirt",
      },
      {
        orderId: 456,
        name: "Shoes",
      },
    ],
  };
  res.status(400).json(output);
});

app.use("*", (req, res) => {
  const output = {
    success: false,
    message: "Route not found",
  };
  res.status(404).json(output);
});

app.listen(5000, () => {
  console.log("Server is up and running on port 5000");
});
