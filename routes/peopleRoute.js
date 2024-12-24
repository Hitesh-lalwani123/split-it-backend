const router = require("express").Router();
const People = require("../models/People");

router.get("/allPeople", async (req, res) => {
  const person = await People.find({});
  if (person) res.json(person);
  //   else res.json({msg: "error creating user"})
});
router.post("/createPerson", async (req, res) => {
  const person = await People.create({
    name: req.body.name,
    email: req.body.email,
  });
  if (person) res.json(person);
});

router.put("/updateAll", async (req, res) => {
  const allPeople = req.body.data.updatedPeople;
  console.log(allPeople);
  for (let index = 0; index < allPeople.length; index++) {
    const person = allPeople[index];
    try {
      await People.updateOne(
        {
          name: person.name,
        },
        {
          amount: person.amount,
          spent: person.spent,
          toHitesh: person.toHitesh,
          toKirti: person.toKirti,
          toVarun: person.toVarun,
        }
      );
      console.log('updated');
      // const all
      
    } catch(err) {
      console.log('Error updating',err);
      
    }
    

  }
  res.send('updated all')
});
router.put("/reset", async (req, res) => {
  // console.log(data);
  const allPeople = await People.find({});
  // console.log(allPeople);
  
  for (let index = 0; index < allPeople.length; index++) {
    const person = allPeople[index];
    try {
      await People.updateOne(
        {
          name: person.name,
        },
        {
          amount: 0,
          spent: 0,
          toHitesh: 0,
          toKirti: 0,
          toVarun: 0,
        }
      );
      // console.log('reseted');
      
    } catch {
      console.log('Error updating');
      
    }
    

  }
  res.send("resetted");
});

router.delete("/deleteAll", async (req, res) => {
  await People.deleteMany({});
  res.send("all deleted");
});




module.exports = router;
