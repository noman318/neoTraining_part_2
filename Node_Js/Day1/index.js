const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

// const employeeInfo = {
//   employeeName: "John Doe",
//   employeeId: 27,
//   salary: {
//     2018_19: "400000INR",
//     2019_20: "500000INR",
//     2020_21: "650000INR",
//   },
//   address: {
//     locality: {
//       address1: "1600 pebble road",
//       address2: "Nearby XYZ Bank",
//     },
//     city: "Mumbai",
//     state: "Maharashtra",
//     country: "India",
//   },
// };
