const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("../user/user-Router");
const screeningsRouter = require("../screenings/screenings-Router");

const server = express();

function logger(req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`There was a ${method} on ${url}`);
  next();
}

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(logger);
server.use("/user", userRouter);
server.use("/screenings", screeningsRouter);

server.get("/", (req, res) => {
  res.send("in server");
});

module.exports = server;
