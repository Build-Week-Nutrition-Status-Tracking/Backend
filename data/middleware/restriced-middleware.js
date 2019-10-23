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
          user_country_id: decodedToken.user_country_id
        };
        next();
      }
    });
  } else {
    res.status(401).json({ message: "you dont have access" });
  }
}

function adminVerify(req, res, next) {
  if (req.user.admin === 1) {
    next();
  } else {
    res.status(401).json({ message: "only admins have access" });
  }
}

//WORK ON THIS --- HOW TO GET THE RESPONSES COUNTRY ID
function userCountryVerify(req, res, next) {
  console.log(req.user.user_country_id, req);
  if (req.user.user_country_id === req.user.user_country_id) {
    next();
  } else {
    res.status(401).json({
      message: "You do not have access to making changes in this country "
    });
  }
}
