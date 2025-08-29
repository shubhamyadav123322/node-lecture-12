const path = require("path");
// External Module
const express = require("express");
// Local Module
const rootDir = require("../utils/path");
const user = express.Router();
user.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "secc.html"));
});
user.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "view", "contact.html"));
});

module.exports = user;
