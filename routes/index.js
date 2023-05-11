var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Motivity Labs' });
});

module.exports = router;
// entry point = app.js
// from app.js to routes.js 











