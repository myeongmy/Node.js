var http = require('http');
var cookie = require('cookie');

http.createServer(function(req, res){
    var cookies = {};
    if(req.headers.cookie != undefined){
        cookies = cookie.parse(req.headers.cookie)
    }
   
    console.log(cookies.yummy_cookie);
    res.writeHead(200, {'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry', 'Secure=Secure; Secure', 'HttpOnly=HttpOnly; HttpOnly', 'Path=Path; Path=/cookie', 'Domain=Domain; Domain=o2.org']})  //Secure 쿠키는 https를 통해 접근했을 때만 이용가능한 쿠키(보안 능력)
    // Path는 그 경로(나 하위 경로)로 들어왔을 때만 쿠키가 생성되고 계속 req하는 것이다
    res.end('Cookie!!!');
}).listen(3000);