const helmet = require("helmet");
const express = require("express");

const server = express();

server.use(helmet());
server.use(express.json());

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong."
  });
});

module.exports = server;
