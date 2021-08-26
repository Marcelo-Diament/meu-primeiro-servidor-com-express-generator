var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    titulo: 'do Jefferson',
    subtitulo: 'Site maneiro'
  });
});

module.exports = router;
