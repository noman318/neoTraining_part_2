const http = require("http");
const fs = require("fs");
const port = 4000;
const server = http.createServer((req, res) => {
  fs.readFile("events.js", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

// const readSync = fs.readFileSync("events.js");
// console.log(readSync.toString());
// server.listen(port, () => {
//   console.log("Server is running");
// });
