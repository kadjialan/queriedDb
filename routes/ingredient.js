var express = require("express");
const { Op, where } = require("sequelize");
const Ingredient = require("../database/ingredient");
var router = express.Router();

router.get("/", async function (req, res) {
  const ingr = await Ingredient.findAll();
  res.send(ingr);
});

router.get("/:id", async function (req, res) {
  const ingr = await Ingredient.findByPk(req.params.id);
  res.send(ingr);
});

router.post("/", async function (req, res) {
  const { name, description } = req.body;
  const ingr = await Ingredient.create({
    name,
    description,
  });
  res.send(ingr);
});

router.put("/:id", async function (req, res) {
  const { name, description  } = req.body;
  if (name, description) {
    await Ingredient.update(req.body, { where: { id: req.params.id } });
    const ink = await Ingredient.findByPk(req.params.id);
    res.send(ink);
  }
  res.send({ message: "validation incomplete!" });
});

router.patch("/:id", async function (req, res) {
  await Ingredient.update(req.body, { where: { id: req.params.id } });
  const ingr = await Ingredient.findByPk(req.params.id);
  res.send(ingr);
});

router.delete("/:id", async function (req, res) {
  await Ingredient.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router;
