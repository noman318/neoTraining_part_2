const express = require("express");
const router = express.Router();

router.get("/get1", (req, res) => {
  res.send("This is User Route");
});

router.get("/api/update", (req, res) => {
  res.send("To Update user Information");
});

module.exports = router;
