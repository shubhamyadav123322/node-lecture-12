const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("Came In First Middalware", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Came In First Middalware", req.url, req.method);
  // res.send("<p>Come From First Middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came In Third Middalware", req.url, req.method);
  res.send("<p>Hello Shubham How are you bro?</p>");
});

app.use("/", (req, res, next) => {
  console.log("Came In Another Middalware", req.url, req.method);
  res.send("<p>Come From Another Middleware</p>");
  next();
});

// const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
