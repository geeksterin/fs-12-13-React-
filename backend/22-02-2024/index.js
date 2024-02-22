// console.log("Middlewares continue");
const express = require("express");
const morgan = require("morgan");

const cartRoutes = require("./cartRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

const app = express();

const apiKey = "aswe023r-23zsdfg3-2wefa";

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey === apiKey) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "API Key is required",
    });
  }
};

// app.use(apiKeyMiddleware);
// app.use(morgan("dev"));
app.use(express.json());
/**
 * Product
 * Cart
 * User
 */

app.use("/cart", cartRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("Server is up and running on port 5000");
});
