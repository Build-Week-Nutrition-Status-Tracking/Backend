const express = require("express");
const db = require("./user-Model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting the users"
      });
    });
});

router.post("/register", (req, res) => {});

router.post("/login", (req, res) => {});

module.exports = router;
