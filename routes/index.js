var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {bytes: 0});
});

router.post('/', function(req, res, next) {
  var fileSize;
  if (req.file) { fileSize = req.file.size; }
  res.render('index', {bytes: fileSize});
});

module.exports = router;
