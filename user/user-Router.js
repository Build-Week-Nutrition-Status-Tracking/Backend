const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const mw = require("../data/middleware/restriced-middleware");

const db = require("./user-Model");

const router = express.Router();

router.post("/register", (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;

  if (user.username && user.password) {
    db.addUser(user)
      .then(newUser => {
        res.status(200).json(newUser);
      })
      .catch(error => {
        res.status(500).json({
          error: error,
          message: "There was a 500 server error while adding a user"
        });
      });
  } else {
    res.status(401).json({ message: "Please provide all require areas" });
  }
});

//work on login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.findByUsername({ username })
    .first()
    .then(user => {
      if (user && bcrypt.hashSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          token,
          message: "you are logged in!"
        });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    });
});

//WILL NEED AUTHENTICATION MIDDLEWARE FOR THESE
router.get("/", mw.tokenVerify, mw.adminVerify, (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json({
        loggedInUser: req.user.username,
        admin: req.user.admin,
        user_country_id: req.user.user_country_id,
        message: `here are the users, ${req.user.username}!`,
        users: users
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting the users"
      });
    });
});

router.get("/:id", mw.tokenVerify, mw.adminVerify, (req, res) => {
  const id = req.params.id;

  db.getUserById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting the user"
      });
    });
});

//---------------------- WORK ON THIS ---------------
router.put("/:id", mw.tokenVerify, mw.adminVerify, (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  console.log(id, changes);

  db.editUser(id, changes)
    .then(updatedUser => {
      res.status(200).json(updatedUser);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while updating the user"
      });
    });
});

function generateToken(user) {
  payload = {
    sub: user.id,
    username: user.username,
    admin: user.admin,
    user_country_id: user.user_country_id
  };
  console.log(payload);

  options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
