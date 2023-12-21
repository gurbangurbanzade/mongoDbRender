const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    id: Number,
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
