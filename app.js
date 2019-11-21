// app.js는 application의 main 파일을 의미한다.
// 어플이 규모가 커지게 되면 여러 개의 파일로 나뉘게 될텐데 시작점이 되는 파일이다.

var express = require('express')

// express 모듈을 이용하여 어플리케이션 객체를 만들어야한다.
var app = express()

//POST 방식으로 전송한 데이터를 읽어오기 위한 모듈 (미들웨어: 사용자가 post 방식으로 전송한 데이터가 있다면 먼저 body parser가 실행하여 req.body 객체를 body parser가 생성)
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

// express와 template engine을 연결하는 작업이다.
//app.set('view engine', 'jade')

// jade 파일 저장할 디렉토리 설정
//app.set('views', './views')

// express와 template engine ejs 연결 후 디렉토리 설정
app.set('view engine', 'ejs')
app.set('views', './views')

// express의 정적 파일 제공 기능 이용한다. (정적인 파일들을 앞으로 이 폴더에 넣어 두고 그 때 그 때 필요할 때 갖다 쓰면 된다)
app.use(express.static('public'))

// get 방식으로 사용자가 요청하는 경우
app.get('/', function(req, res){
    //res.send('<h1>Welcome to Home!!!<h1>')
    res.sendFile(__dirname+'/public/main.html')
})

app.get('/cat', function(req, res){
    res.send('Hello cat, <img src="/cat.jpg">')
})

app.get('/dynamic', function(req, res){
    
    var lis = ``
    for(var i=0;i<5;i++){
        lis += `<li>coding</li>`
    }
    
    var time = Date()
    var output = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
</html>`
    res.send(output)
})

app.get('/login', function(req, res){
    res.send('<h1>Login please<h1>')
})

app.get('/template', function(req,res){
    
    // 두 번째 인자로 temp.jade 파일에서 사용할 time 변수 객체 형태로 전달!
    res.render('temp', {time: Date(), title: 'Jade'});
})

//query string & semantic url
app.get('/topic/:id', function(req, res){
    var topics = ['Javascript is...', 'Nodejs is...', 'Express is...']
    
    var output = `<a href='/topic?id=0'>Javascript is...</a><br/><a href='/topic?id=1'>Nodejs is...</a><br/><a href='/topic?id=2'>Express is...</a><br/>${topics[req.params.id]}`
    
    res.send(output)
})

app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id+','+req.params.mode)
})

app.get('/form', function(req, res){
    res.render('form')
})

app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    
    res.send(title+','+description)
})

app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    
    res.send(title+','+description)
})

app.post('/email_post', function(req, res){
    //res.send('<h1>Welcome!!'+req.body.email+'</h1>');
    res.render('email', {email: req.body.email})
})

app.post('/ajax_send_email', function(req, res){
    console.log(req.body.email);
    var responseData = {'result': 'ok', 'email': req.body.email};
    
    res.json(responseData);
})
app.listen(3000, function(){
    console.log('Connected 3000 port!!!')
})    // 우리의 웹 어플리케이션 서버가 3000번 포트에서 기다리고 있음