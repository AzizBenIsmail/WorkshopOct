var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/welcom', function(req, res, next) {
  res.json('marahbe bikom nes lkol');
});

module.exports = router;
