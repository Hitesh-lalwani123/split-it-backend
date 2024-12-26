const Shayari = require("../models/Shayari");

const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  const items = await Shayari.find({});
  if (items) res.json(items);
});
router.post("/create", async (req, res) => {
  const data = req.body.data;
  try {
    const item = await Shayari.create({
      title: data.title,
      by: data.by,
      email: data.email,
    });
    res.set(201).json({ message: "shayari created and sent for review from admin" });
    console.log(item);
  } catch (error) {
    res.set(501).json({message: "Error creating shayari"})
  }
});

module.exports = router;
