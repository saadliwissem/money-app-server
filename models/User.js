const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verificationCode: { type: String, required: true },
  img: { type: String },
  verified: { type: Boolean, required: false, default: false },
  balance: { type: Number },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
