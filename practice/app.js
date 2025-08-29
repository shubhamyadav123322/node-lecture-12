const path = require("path");
// External Module
const express = require("express");
// Local Module
const rootDir = require("./utils/path");
const host = require("./routes/host");
const user = require("./routes/user");

const app = express();

app.use(express.urlencoded());
app.use(host);
app.use(user);
app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server runing on address http://localhost:${PORT}`);
});
