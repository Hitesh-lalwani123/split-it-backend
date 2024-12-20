const mongoose = require("mongoose");
const dbURL =
  "mongodb+srv://georgelook2800:hm82we63@cluster0.wsh3nhc.mongodb.net/";

function connectTodb() {
  mongoose
    .connect(dbURL)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => console.log(err));
}

module.exports = {connectTodb}
