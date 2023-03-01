const connection = require(".");

async function getAllUsers() {
  const [result] = await connection.query("SELECT * from users;");
  return result;
}

async function findUserById(id) {
  const [[user]] = await connection.query(
    `SELECT * from users WHERE id = ?;`,
    [id]
  );
  return user;
}

async function addUser(list) {
  const [ack] = await connection.query(
    "INSERT INTO users (name, api_key, phone, email) VALUES(?, ?, ?, ?)",
    [list.name, list.api_key, list.phone, list.email]
  );
  return findUserById(ack.insertId);
}

async function updateUser(list, id) {
  const [update] = await connection.query(
    "UPDATE users SET name = ?, api_key = ?, phone = ?, email = ? WHERE id = ?",
    [list.name, list.api_key, list.phone, list.email, id]
  );
  return findUserById(id);
}

async function modifyUser(data, id) {
    const values = [];
    const newKeyVal = Object.keys(data)
      .map((key) => {
        values.push(data[key]);
        return `${key} = ?`;
      })
      .join(", ");
    connection.query(`UPDATE users SET ${newKeyVal} WHERE id = ?`, [
      ...values,
      id,
    ]);
  }

async function deleteUser(id) {
  const [user] = await connection.query(`DELETE  from users WHERE id = ?;`, [
    id,
  ]);
  return user;
}

module.exports = {
  getAllUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUser,
  modifyUser,
};
