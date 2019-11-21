var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '101210',
  database : 'o2'
});

connection.connect();

//var sql = 'select * from professor';
//
//connection.query(sql, function(err, rows, fields){
//    if(err)
//        console.log(err);
//    else{
//        for(var i=0;i<rows.length;i++){
//            console.log(rows[i].name);
//        }
//    }
//       
//})

//var sql = 'insert into professor (name, belong, phone) values(?, ?, ?)';
//var params = ['Supervisor', 'Watcher', 'graphittie'];
//connection.query(sql, params, function(err, rows, fields){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(rows);
//    }
//})


//var sql = 'update professor set name=?, phone=? where belong=?';
//var params = ['mj', '01000000000', 'EWHA'];
//connection.query(sql, params, function(err, rows, fields){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(rows);
//    }
//})

var sql = 'delete from professor where name=?';
var params = ['mj'];
connection.query(sql, params, function(err, rows, fields){
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }
})

connection.end();