// console.log("eComm App APIs");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error connecting with Database", err));

// App routes

app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running at port ${process.env.PORT}`);
});
