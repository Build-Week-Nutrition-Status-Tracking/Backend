const db = require("../data/dbConfig");

module.exports = {
  getUsers,
  getUserById,
  editUser,
  addUser,
  findByUsername
};

function getUsers() {
  return db("user");
}

function getUserById(id) {
  return db("user").where("id", "=", id);
}

function editUser(id, changes) {
  return db("user")
    .where({ id })
    .update(changes);
}

function addUser(newUser) {
  return db("user").insert(newUser);
}

function findByUsername(username) {
  return db("user").where(username);
}
