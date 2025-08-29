// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local Module
const rootDir = require("../utils/path");
const host = express.Router();

host.get("/", (req, res, next) => {
  console.log("Handling / For Get", req.url, req.method);
  res.sendFile(path.join(rootDir, "view", "home.html"));
});

module.exports = host;
