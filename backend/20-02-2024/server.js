const express = require("express");
const fs = require("node:fs");

const productsLists = require("./products.json");
const arr = null;
const app = express();

const apiKey = "zsd02-asdf3-f3243";

const writeFile = (logString) =>
  fs.appendFileSync("access.log", logString + "\n");

//Logger
app.use((req, res, next) => {
  console.log("(1) LOGGING MIDDLEWARE");
  writeFile(`Request URL : ${req.url}, Time : ${new Date()}, IP : ${req.ip}`);
  //   res.status(403).json({
  //     success: false,
  //     message: "Access restricted",
  //   });
  next(); // Allowed to go inside
});

// API Key validator
app.use((req, res, next) => {
  console.log("(2) API KEY Validator Middleware");
  throw new Error();
  if (req.query.apiKey === apiKey) {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Please provide an API Key",
    });
  }
});

//Route 1
app.get("/product-list/:id", (req, res, next) => {
  //   console.log(req.params);
  console.log("(3) ROUTE LOGIC");
  const product = productsLists.find((product) => product.id == req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with Id ${req.params.id} not found`,
    });
  }
  //   next();
  res.json({
    success: true,
    results: product,
  });
});

// Route 2
app.get("/product-list", (req, res) => {
  //   console.log(req.query);
  let filteredResults = productsLists;
  if (req.query.searchKey) {
    filteredResults = productsLists.filter((product) =>
      product.title.toLowerCase().includes(req.query.searchKey)
    );
  }
  if (filteredResults.length === 0) {
    return res.status(204).json({
      success: true,
      results: [],
    });
  }
  res.json({
    success: true,
    total: filteredResults.length,
    results: filteredResults,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.log("(4) ERROR HANDLER");
  res.status(500).json({
    success: false,
    message: "Something went wrong, please try again after some time",
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(5000, () => {
  console.log("Server is up and running at port 5000");
});
