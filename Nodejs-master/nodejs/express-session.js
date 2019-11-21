var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')  //session에 필요한 미들웨어 불러옴
var FileStore = require('session-file-store')(session)  //session폴더에 파일이 생성되는 데 거기에 쿠키 저장

var app = express()


// 우리 application이 session을 이용할 수 있도록 옵션 지정
app.use(session({
  secret: 'sdfafesafd',  //다른 사람이 보면 안되는 값
  resave: false,         //항상 false로 두기
  saveUninitialized: true, //세션이 필요할 때까지 세션을 구동시키지 않는다 (false면 언제나 구동)
  store: new FileStore()
}))

// 기본적으로 session 객체가 메모리에 default로 저장되어 있기 때문에 서버가 꺼지면 휘발되어 사라진다. 그러면 조회 수도 다시 1부터 시작될거고 전부 로그아웃됨! 다른 곳에 저장이 필요해 보임.
app.get('/', function(req, res, next){
    console.log(req.session);
    if(req.session.num === undefined){
        req.session.num = 1;    // session 객체 이용하여 조
        회 수 구현
    }else{
        req.session.num += 1;
    }
    res.send(`Views: ${req.session.num}`);  // 변수 대입할 때는 ``
})


app.listen(3000, function(req, res){
    console.log('Connecting tp 3000!!!');
})