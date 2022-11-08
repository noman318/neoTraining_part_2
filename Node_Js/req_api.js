const http = require("http");
const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts",
  // port: 4000,
  method: "GET",
};

const req = http
  .request(options, (res) => {
    let data = "";
    res.on("data", (d) => {
      console.log("000000000");
      data += d;
    });
    res.on("end", () => {
      console.log("11111111111");
      console.log("Body: ", JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error :", +err);
  });
req.end();
console.log("it is running");
