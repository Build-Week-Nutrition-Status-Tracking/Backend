const jwt = require("jsonwebtoken");
const secrets = require("../../config/secrets");

module.exports = {
  tokenVerify,
  adminVerify,
  userCountryVerify
};

function tokenVerify(req, res, next) {}

function adminVerify(req, res, next) {}

function userCountryVerify(req, res, next) {}
