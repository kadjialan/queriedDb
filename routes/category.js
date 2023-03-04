var express = require("express");
const { Op, where } = require("sequelize");
const Category = require("../database/category");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const category = await Category.findAll();
  res.send(category);
});

router.get("/:id", async function (req, res) {
  const cate = await Category.findByPk(req.params.id);
  res.send(cate);
});

router.post("/", async function (req, res) {
  const { name, description } = req.body;
  const cate = await Category.create({
    name,
    description,
  });
  res.send(cate);
});

router.put("/:id", async function (req, res) {
  const { name, description  } = req.body;
  if (name, description) {
    await Category.update(req.body, { where: { id: req.params.id } });
    const cate = await Category.findByPk(req.params.id);
    res.send(cate);
  }
  res.send({ message: "validation incomplete!" });
});

router.patch("/:id", async function (req, res) {
  await Category.update(req.body, { where: { id: req.params.id } });
  const cate = await Category.findByPk(req.params.id);
  res.send(cate);
});

router.delete("/:id", async function (req, res) {
  await Category.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router