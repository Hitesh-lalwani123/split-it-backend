const mongoose = require("mongoose");

const shayariSchema = new mongoose.Schema({
  title: { type: String, required: true },
  by: { type: String, default: "anonymous", unique: false },
  email: { type: String, default: "anonymous@gmail.com", unique: false },
  approved: {type: Boolean, default: false}
});

module.exports = mongoose.model("Shayari", shayariSchema);
