const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: false,
    deault: "",
  },
  city: {
    type: String,
    requied: false,
    default: "",
  },
  state: {
    type: String,
    requied: false,
    default: "",
  },
  pincode: {
    type: String,
    requied: false,
    default: "",
  },
});

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    reqruired: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  wishlist: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "products",
  },
  address: {
    type: addressSchema,
  },
});

userSchema.pre("save", function () {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
