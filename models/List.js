const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
  desc: { type: String,required: true },
  amt: { type: Number, required: true},
  payer: { type: String, required: true },
  involved: { type: [String], required: true },
  today: { type: String, default: Date.now },
});

module.exports = mongoose.model("List", listSchema);
