var express = require("express");
const { Op, where } = require("sequelize");
const User = require("../database/users");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const users = await User.findAll();
  res.send(users);
});

router.get("/:id", async function (req, res) {
  const users = await User.findByPk(req.params.id);
  res.send(users);
});

router.post("/", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } =
    req.body;
  const user = await User.create({
    firstName,
    lastName,
    emailAddress,
    phone,
    password,
    apikey: Date.now(),
  });
  res.send(user);
});

router.put("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  if (firstName && lastName && emailAddress && phone && password) {
    await User.update(req.body, { where: { id: req.params.id } });
    const drink = await User.findByPk(req.params.id);
    res.send(drink);
  }
  res.send({ message: "validation incomplete!" });
});

router.patch("/:id", async function (req, res) {
  await User.update(req.body, { where: { id: req.params.id } });
  const drink = await User.findByPk(req.params.id);
  res.send(drink);
});

router.delete("/:id", async function (req, res) {
  await User.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router;
