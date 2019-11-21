var express = require('express');

var app = express();

 express와 template engine을 연결하는 작업이다.
app.set('view engine', 'jade')

 jade 파일 저장할 디렉토리 설정
app.set('views', './views')

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '101210',
  database : 'o2'
});

connection.connect();


app.get(['/topic', '/topic/:id'], function(req, res){
    var sql = 'SELECT _id, name from professor';
    connection.query(sql, function(err, rows, fields){
        if(err)
            console.log(err);
        res.render('view', {})
    })
})
app.listen(3002, function(req, res){
    console.log("Connecting to 3002 port!!");
})