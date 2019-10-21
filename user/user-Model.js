const db = require("../data/dbConfig");

module.exports = {
  getUsers,
  addUser
};

function getUsers() {
  return db("user");
}

function addUser(newUser) {
  return db("user").insert(newUser);
}
