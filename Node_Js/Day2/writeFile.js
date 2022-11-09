const fs = require("fs");
fs.writeFile(
  "input.txt",
  "My text is being Displayed on the Text file",
  (err) => {
    if (err) {
      console.log("Error occured", +err);
    } else {
      console.log("Data created");
    }
  }
);
