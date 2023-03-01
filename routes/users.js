var express = require('express');
const { getAllUsers, findUserById, addUser, updateUser, deleteUser, modifyUser } = require('../database/users');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await getAllUsers()
  res.send(users);
});

router.get('/:id',  async function(req, res, next) {
  const users = await findUserById(req.params.id)
  res.send(users);
});

router.post('/', async function(req, res, next) {
  const users = await addUser(req.body)
  res.send(users);
});

router.put('/:id',async function(req, res, next) {
  const update = await updateUser(req.body, req.params.id)
  res.send(update);
});

router.patch('/:id', async function(req, res, next) {
  const update = await modifyUser(req.body, req.params.id)
  res.send(update);
});

router.delete('/:id', async function(req, res, next) {
  const users = await deleteUser(req.params.id)
  res.send('success');
});

module.exports = router;
