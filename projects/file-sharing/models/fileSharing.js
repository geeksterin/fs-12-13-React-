const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  sender: {
    type: String,
    required: false,
    default: "",
  },
  receiver: {
    type: String,
    required: false,
    default: "",
  },
});

module.exports = mongoose.model("file", fileSchema);
