var express = require('express');
var router = express.Router();
const now = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { hour: now.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2,}), minute:now.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2,}), second: now.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2,}) });
  res.render('index', { });
});

module.exports = router;
