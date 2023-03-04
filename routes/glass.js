var express = require("express");
const { Op, where } = require("sequelize");
const Glass = require("../database/glass");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const ingr = await Glass.findAll();
  res.send(ingr);
});

router.get("/:id", async function (req, res) {
  const users = await Glass.findByPk(req.params.id);
  res.send(users);
});

router.post("/", async function (req, res) {
  const { name } = req.body;
  const user = await Glass.create({
    name
  });
  res.send(user);
});

router.put("/:id", async function (req, res) {
  const { name  } = req.body;
  if (name) {
    await Glass.update(req.body, { where: { id: req.params.id } });
    const drink = await Glass.findByPk(req.params.id);
    res.send(drink);
  }
  res.send({ message: "validation incomplete!" });
});

router.patch("/:id", async function (req, res) {
  await Glass.update(req.body, { where: { id: req.params.id } });
  const drink = await Glass.findByPk(req.params.id);
  res.send(drink);
});

router.delete("/:id", async function (req, res) {
  await Glass.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router