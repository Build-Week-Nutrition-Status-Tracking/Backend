const jwt = require("jsonwebtoken");
const secrets = require("../../config/secrets");

module.exports = {
  tokenVerify,
  adminVerify,
  userCountryVerify
};

function tokenVerify(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "invalid" });
      } else {
        req.user = {
          username: decodedToken.username,
          admin: decodedToken.admin,
          country_id: decodedToken.country_id
        };
        next();
      }
    });
  } else {
    res.status(401).json({ message: "you dont have access" });
  }
}

function adminVerify(req, res, next) {}

function userCountryVerify(req, res, next) {}
