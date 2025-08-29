const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1>Welcome to Home</h1>");
    return res.end();
  } else if (req.url === "/man") {
    res.write("<h1>Welcome to Home man</h1>");
    return res.end();
  } else if (req.url === "/woman") {
    res.write("<h1>Welcome to Home woman</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to Home kids</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to Home cart</h1>");
    return res.end();
  }
  res.write(`
    <html lang="en">
      <head>
        <title>Navbar</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/man">Man</a></li>
            <li><a href="/woman">Woman</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </body>
    </html>
  `);

  res.end();
});

server.listen(3001, () => {
  console.log("Server running on address http://localhost:3001");
});
