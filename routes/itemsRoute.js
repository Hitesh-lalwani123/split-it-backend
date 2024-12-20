const router = require("express").Router();
const List = require("../models/List");

router.get("/allItems", async (req, res) => {
  const items = await List.find({});
  if (items) res.json(items);
});

router.post("/addItem", async (req, res) => {
  const data = req.body.data;

  const item = await List.create({
    desc: data.desc,
    amt: data.amt,
    payer: data.payer,
    involved: data.involved,
    today: data.today,
  });
  if (item) res.json(item);
});

router.delete("/deleteItem", async (req, res) => {
  let id = req.body;
  console.log(id.id);
  
  let response = await List.deleteOne({_id: id.id});
  console.log('item deleted with id',id.id);
  
  res.send(response)

});
router.put("/updateItem", async (req, res) => {
  let response = await List.deleteOne({ _id: req.body._id });
  res.send(response);
});

module.exports = router;
