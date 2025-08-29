const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");

const server = http.createServer((req, rep) => {
  console.log(req.url, req.method);
  // testingSyntax();
  runtime();
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
