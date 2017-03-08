var express = require('express');
var router = express.Router();
//var app = express();
/*
router.get('/', function(req,res,next){
  res.send('Express App Post');
});
*/
router.get('/users', function (req, res, next) {
  res.send('new user. name: ' + req.body.name);
});


/* GET home page. */
/*router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express Test' });
});
*/
module.exports = router;
