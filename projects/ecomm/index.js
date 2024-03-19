// console.log("eComm App APIs");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const RateLimit = require("express-rate-limit");
const MongoStore = require("rate-limit-mongo");

const authMiddleware = require("./middlewares/auth");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const couponRoutes = require("./routes/coupon");
const orderRoutes = require("./routes/order");

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const limiter = RateLimit({
  store: new MongoStore({
    uri: process.env.DATABASE_URL,
    expireTimeMs: 5 * 60 * 1000,
  }),
  windowMs: 5 * 60 * 1000,
  max: 2,
  message: {
    success: false,
    message: "Please try again after 5 mins",
  },
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(limiter);

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
