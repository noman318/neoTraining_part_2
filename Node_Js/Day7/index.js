console.log("View Engine Practice");
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  //   console.log(__dirname);
  res.render("index.ejs", {
    title: "Template Engine by Noman",
    h4: "Getting Started with ejs view Engine",
  });
});

app.get("/login", (req, res) => {
  res.render("login.ejs", {
    title: "Login Form",
  });
});

app.get("/products", (req, res) => {
  res.render("products.ejs", {
    title: "Products Available",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on Port ${port}`);
  }
});
