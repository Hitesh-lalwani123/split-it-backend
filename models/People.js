const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, default: "noemail@gmail.com", unique: false },
  amount: { type: Number, default: 0 },
  spent: { type: Number, default: 0 },
  toHitesh: { type: Number, default: 0 },
  toKirti: { type: Number, default: 0 },
  toVarun: { type: Number, default: 0 },
});

module.exports = mongoose.model("People", peopleSchema);
