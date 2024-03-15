// console.log("eComm App APIs");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authMiddleware = require("./middlewares/auth");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const couponRoutes = require("./routes/coupon");
const orderRoutes = require("./routes/order");

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error connecting with Database", err));

// App routes

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/coupon", couponRoutes);
app.use("/api/v1/order", authMiddleware(["buyer"]), orderRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running at port ${process.env.PORT}`);
});
