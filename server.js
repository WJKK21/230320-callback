import http from 'http';

console.log(http);

const server = http.createServer(function(request, response){
  let body = "";
  body = body + "<!DOCYYPE html>";
  body = body + "<html>";
  body = body + "<head>";
  body = body + "<title>node.js</title>";
  body = body + "</head>";
  body = body + "<body>";
  body = body + "<h1>Hello world</h1>";
  body = body + "</body>";
  body = body + "</html>";
  //? 여기는 규칙을 따라서 내가 자유롭게 쓰는 비즈니스 모델이다 
  //? 동적으로 끼워서 바꿀 수 있다 
  //? 엔드 유저 앞까지만 문자열로 존재하다가 유저 앞에서만 문서가 된다
  //? 서버 사이드 방식 

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('hello world')
  //? 여기는 맞춰서 써야되는 부분이다 

});

//? response는 객체다 
//? 두번째 매개변수는 뭔가 뭔가로 바껴서 변하기 마련이다 
//? 객체이고 어쨌거나 이것은 모듈이다

