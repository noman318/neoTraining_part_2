console.log("Getting_Started_with_Node.js");
const http = require("http");
const port = 8000;
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<html><body><h2>MyPage</h2></body></html>");
      res.end();
    } else if (req.url == "/user") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ name: "Shaikh_Noman", age: 23 }));
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<html><body><h2>Invalid URL</h2></body></html>");
      res.end();
    }
  })
  .listen(port);
console.log(`Server is running on Port ${port}`);
