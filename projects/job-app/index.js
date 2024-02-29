const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const jobRoutes = require("./routes/job");

dotenv.config();

const app = express();
console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD
  }@cluster0.iuleykq.mongodb.net/`
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.use(express.json());

app.use("/api/v1/job/", jobRoutes);

app.listen(5000, () => console.log("Server is up and running at port 5000"));
