const express = require("express");
const Drink = require("../database/drink");
var router = express.Router();

router.get("/", async (req, res) => {
  const drinks = await Drink.findAll();
  res.json(drinks);
});

router.post("/", async (req, res) => {
  const { name, description, imageUrl, recipe } = req.body;
  const drink = await Drink.create({
    name,
    description,
    imageUrl,
    recipe,
  });
  res.json(drink);
});

router.get("/:id", async (req, res) => {
  const drink = await Drink.findByPk(req.params.id);
  res.send(drink);
});

router.post("/", async function (req, res) {
  const { name, description, imageUrl, recipe, userid } = req.body;
  const drink = await Drink.create({
    name,
    description,
    imageUrl,
    recipe,
    userid
  });
  res.send(drink);
});

router.put("/:id", async function (req, res) {
  const { name, description, imageUrl, recipe } = req.body;
  if (name && description && imageUrl && recipe) {
    await Drink.update(req.body, { where: { id: req.params.id } });
    const drink = await Drink.findByPk(req.params.id);
    res.send(drink);
  }
  res.send({ message: "validation incomplete!" });
});

router.patch("/:id", async function (req, res) {
  await Drink.update(req.body, { where: { id: req.params.id } });
  const drink = await Drink.findByPk(req.params.id);
  res.send(drink);
});

router.delete("/:id", async function (req, res) {
  await drink.destroy({ where: { id: req.params.id } });
  res.send("success");
});



module.exports = router;
