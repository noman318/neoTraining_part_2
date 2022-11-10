const fs = require("fs");
fs.readFile("index.txt", (err, data) => {
  debugger;
  if (err) throw err;
  console.log(data);
});
