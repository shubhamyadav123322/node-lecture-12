// External Mode
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Handling / For Get", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us For Get", req.url, req.method);
  res.send(`
    <h1>Please Give Your Details Here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="email" name="email" placeholder="Enter your email" />
    <input type="Submit" />
    </form>
    `);
});
app.post("/contact-us", (req, res, next) => {
  console.log("First handling", req.url, req.method, req.body);
  next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us For Post", req.url, req.method, req.body);
  res.send(`<h1>We will Connect you Shortly</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server runing on address http://localhost:${PORT}`);
});
