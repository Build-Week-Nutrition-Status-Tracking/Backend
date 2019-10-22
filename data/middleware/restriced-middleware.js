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
        // console.log("req.user", req.user);
        next();
      }
    });
  } else {
    res.status(401).json({ message: "you dont have access" });
  }
}

function adminVerify(req, res, next) {
  console.log(req.user, "req.user");
  if (req.user.admin === 1) {
    next();
  } else {
    res.status(401).json("only admins have access");
  }
}

// function adminVerify(req, res, next) {
//   if (req.user) {
//     jwt.verify((err, decodedToken) => {
//       if (err) {
//         res.status(401).json({ message: "invalid" });
//       } else {
//         req.user = {
//           admin: decodedToken.admin
//         };
//         if (admin === true) {
//           next();
//         }
//       }
//     });
//   } else {
//     res.status(401).json("only admins have access");
//   }
// }

function userCountryVerify(req, res, next) {}
