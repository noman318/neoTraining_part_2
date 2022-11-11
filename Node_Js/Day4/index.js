console.log("Getting_Started_with_Express");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/post", (req, res) => {
  res.send("Post data");
  const fname = req.body.fname;
  const lname = req.body.lname;
  res.send(`${fname} ${lname}`);
});
app.put("/put", (req, res) => {
  res.send("Put data");
});
app.delete("/delete", (req, res) => {
  res.send("Delete data");
});
app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server is running on Port ${port}`);
  }
});
