var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Rotten Movies Test' });
});

router.post('/', function(re, res) {
	let city = req.body.city; 
	let url = 
	res.render('index');
	console.log(req.body.city);
})

module.exports = router;
