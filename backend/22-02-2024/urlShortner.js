// const express = require("express"); // CJS
import express from "express"; // ESM
import fs from "node:fs";
import path from "node:path";
import { nanoid } from "nanoid";
import { fileURLToPath } from "node:url";
// const __dirname = import.meta.url;
// console.log(__dirname)
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isURLValid = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Request received on /");
  res.sendFile(__dirname + "/urlForm.html");
});

app.post("/url-shortner", (req, res) => {
  const longUrl = req.body.url;
  const shortUrl = nanoid(10);
  const isValid = isURLValid(longUrl);
  if (!isValid) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL",
    });
  }
  const fileResponse = fs.readFileSync("urlmap.json");
  const fileData = JSON.parse(fileResponse.toString());

  fileData[shortUrl] = longUrl;

  fs.writeFileSync("urlmap.json", JSON.stringify(fileData));

  res.json({
    succes: true,
    url: `http://localhost:5000/${shortUrl}`,
  });
});

app.get("/:shortUrl", (req, res) => {
  const fileResponse = fs.readFileSync("urlmap.json");
  const fileData = JSON.parse(fileResponse.toString());
  const longUrl = fileData[req.params.shortUrl];
  // If longurl doesn't exists show 404 with json
  res.redirect(longUrl);
});

app.listen(5000, () => console.log("App is up and running at port 5000"));
