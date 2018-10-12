var mysql = require('mysql');

// var pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'123456',
//     database:'blog',
//     insecureAuth:true
// });

var pool = mysql.createPool({
    host:'sdm455338138.my3w.com',
    user:'sdm455338138',
    password:'rosi-8899',
    database:'sdm455338138_db',
    insecureAuth:true
});
function query(sql,options,callback) {
    pool.getConnection(function (err,conn) {
        if(err){
            console.log('connection err::',err);
        }else{
            conn.query(sql,options,function (err,results,fields) {
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,results,fields);
            });
        }
    })
}
exports.query = query;
