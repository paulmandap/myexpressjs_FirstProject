var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Express Framework' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { name: 'Paul Christian M. Mandap', school: 'Technological Institute of the Philippines' });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { contactDetails: 'Email: mpcmandap@tip.edu.ph | Phone: 123-456-7890' });
});

module.exports = router;
