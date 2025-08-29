const http = require("http");

const server = http.createServer((req, rep) => {
  console.log(req);
});
const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
