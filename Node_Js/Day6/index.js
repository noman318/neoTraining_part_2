const express = require("express");
const userRoutes = require("./routes/UserRoutes");
const adminRoutes = require("./routes/AdminRoutes");
const app = express();
const port = 6000;

app.use(express.static(__dirname + "/public"));
console.log(__dirname);
app.get("/", (req, res) => {
  res.send("Router route");
});

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on Port ${port}`);
  }
});
