const db = require("../data/dbConfig");

module.exports = {
  getUsers,
  getUserById,
  addUser,
  findByUsername
};

function getUsers() {
  return db("user");
}

function getUserById(id) {
  return db("user").where("id", "=", id);
}

function addUser(newUser) {
  return db("user").insert(newUser);
}

function findByUsername(username) {
  return db("user").where(username);
}
