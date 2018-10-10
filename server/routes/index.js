var express = require('express');
var router = express.Router();
var db = require('../config/db');
var diaryLen = 0;

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

router.all('/diary/add', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


/* GET home page. */
router.get('/user', function(req, res, next) {
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

router.get('/diary', function(req, res, next) {
    // res.render('index', { title: 'Express',text:'6666666666' });
    // res.status(200).send({id:req.params.id, name: req.params.password});
    // res.status(404).send('Sorry, we cannot find that!');
    // res.send(req.url);
    console.log('get diary ....');
    db.query("select * from diary_db",function(err,rows){
        if(err){
            // res.render("users.ejs",{title:"用户列表",datas:[]});
            console.log('err:',err);
        }else {
            // res.render("users.ejs",{title:"用户列表",datas:rows});
            console.log('data:',rows);
            diaryLen = rows.length;
            res.json(rows);
        }
    });
});

router.post("/diary/add",function(req,res,next){
    var title = req.body.title;
    var container = req.body.container;
    //"insert into user(name,age,id) values('"+name+"','"+ age +"','10')"
    const id = diaryLen;
    console.log('add666 :',req.body,id,title,container);
    db.query(`insert into diary_db(id,title,container) values('${id}','${title}','${container}')`,function(err,rows){
        if(err){
            res.send("新增失败"+err);
            console.log('新增失败',err);
        }else {
            const rebackData = {code:0,data:{state:'success'}}
            // res.json(rebackData);
            res.end(JSON.stringify(rebackData));
            console.log('添加成功！',rebackData);
        }
    });
});
module.exports = router;
