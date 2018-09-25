var express = require('express');
var router = express.Router();

/**
 * 跨域设置
 */
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express',text:'6666666666' });
    // res.status(200).send({id:req.params.id, name: req.params.password});
    // res.status(404).send('Sorry, we cannot find that!');
    // res.send(req.url);
    var usermodel={name:'rosi',age:28};
    res.json(usermodel);
  console.log('get path /....');
});

module.exports = router;
