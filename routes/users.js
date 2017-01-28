var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/beaute', function(req, res, next) {
		
			res.render('beaute');

});
module.exports = router;
