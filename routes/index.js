var express = require('express');
var router = express.Router();
var request = require('request');
var cookieParser = require('cookie-parser');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
