const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGO_URL;

function connectTodb() {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => console.log(err));
}

module.exports = { connectTodb };
