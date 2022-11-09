console.log("Getting_Started_with_Node.js");
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello from Server");
  })
  .listen(8000);
