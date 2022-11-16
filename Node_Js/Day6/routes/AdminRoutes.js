const express = require("express");
const router = express.Router();

router.get("/admin", (req, res) => {
  res.send("This is admin Route");
});
module.exports = router;
