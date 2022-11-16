console.log("Task_1");
const { error } = require("console");
const express = require("express");
const fs = require("fs");
const port = 2000;

const app = express();

app.get("/write", (req, res) => {
  fs.writeFile("myTask.txt", "My first Task in Express", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data Created");
      res.status(201).send("Data created");
    }
  });
});

app.get("/read", (req, res) => {
  fs.readFile("myTask.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
      res.status(201).send("data read");
    }
  });
});

app.get("/update", (req, res) => {
  fs.appendFile(
    "myTask.txt",
    "My first Task in Express using Node.js",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("data Updated");
        res.status(201).send("Data Updated");
      }
    }
  );
});

app.get("/delete", (req, res) => {
  fs.unlink("myTask.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
      res.status(201).send("file Deleted");
    }
  });
});

app.listen(port, (err) => {
  console.log(`Server is running on port ${port}`);
});
