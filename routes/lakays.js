var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Register page product
router.get('/produits', function(req, res, next) {
  res.render('produits', {
    title: 'Produits'
  });
});

// Register page Medicinals
router.get('/medicinale', function(req, res, next) {
  res.render('medicinale', {
    title: 'Medicinale'
  });
});

// Register page beaute
router.get('/beaute', function(req, res, next) {
  res.render('beaute', {
    title: 'Beaute'
  });
});

// Register page Amuse Guelle
router.get('/amuseguel', function(req, res, next) {
  res.render('amuseguel', {
    title: 'Amuseguel'
  });
});




module.exports = router;
