const express = require("express");
const app = express();
const PORT = 8000;
const { connectTodb } = require("./db");
const cors = require("cors");
const itemsRoute = require("./routes/itemsRoute");
const peopleRoute = require("./routes/peopleRoute");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "api working fine" });
});

app.use("/api/people", peopleRoute);
app.use("/api/items", itemsRoute);

app.listen(PORT, () => {
  console.log("server running on http://localhost:8000");
  connectTodb();
});
