const express = require("express");
const mongoose = require("mongoose");

const fileSharingRoutes = require("./routes/fileSharing");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/file_sharing")
  .then(() => console.log("Database connection established successfully"))
  .catch((err) => console.log("Error connecting Database", err));

app.use(fileSharingRoutes);

const PORT = 10000;
app.listen(PORT, () => console.log(`Server is up and running at port ${PORT}`));
