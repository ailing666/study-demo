const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(["001", "002", "003"]);
});


module.exports = router;
