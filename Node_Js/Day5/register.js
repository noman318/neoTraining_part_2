console.log("Creating_Register_Page");
const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //   console.log(__dirname);
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const age = req.body.age;
  console.log(
    `Name is : ${fname} ${lname} \nEmail is ${email} \nAge is ${age}`
  );
  res
    .status(201)
    .send(
      `Name is : ${fname} ${lname} <br />Email is ${email} <br />Age is ${age}`
    );

  //   res.send("User Registered Sucessfully");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on Port ${port}`);
  }
});

// Event Loop Practice
// setTimeout(
//   (timer = () => {
//     console.log("1st Click");
//   }),
//   5000
// );
// console.log("2nd Click");

// setTimeout(
//   (timer1 = () => {
//     console.log("3rd Click");
//   }),
//   20
// );
// setTimeout(
//   (timer2 = () => {
//     console.log("Second last Click");
//   }),
//   0
// );
// console.log("Last Click");
