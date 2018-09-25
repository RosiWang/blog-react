var express = require('express');
var router = express.Router();
var db = require('../config/db');

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
  console.log('get path /....');
    db.query("select * from admin_db",function(err,rows){
        if(err){
            // res.render("users.ejs",{title:"用户列表",datas:[]});
            console.log('err:',err);
        }else {
            // res.render("users.ejs",{title:"用户列表",datas:rows});
            console.log('data:',rows);
            res.json(rows);
        }
    });
});

module.exports = router;
