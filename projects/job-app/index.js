const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/jobapp")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.use(express.json());

app.use("/api/v1/job/", jobRoutes);

app.listen(5000, () => console.log("Server is up and running at port 5000"));
