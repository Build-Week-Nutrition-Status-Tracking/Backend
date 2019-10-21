const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("../user/user-Router");
const screeningsRouter = require("../screenings/screenings-Router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/user", userRouter);
server.use("/screenings", screeningsRouter);

server.get("/", (req, res) => {
  res.send("in server");
});

module.exports = server;
