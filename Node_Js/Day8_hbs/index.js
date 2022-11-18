console.log("Getting_Started_with_HBS_view_engine");
const express = require("express");
const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", "./views");

let data = {
  name: "Noman",
  age: 34,
};

app.get("/", (req, res) => {
  res.render("index.hbs", { demo: data });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on Port ${port}`);
  }
});
