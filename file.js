/* import fs from 'fs';

let name = 'ijs';
let date = new Date();
let fileName = date.getFullYear() + name;

fs.writeFileSync("./" + fileName, name); */
//? 2023ijs 파일이 생성됨
//? 쓰다 파일을 동기 방식으로 (하위 파일로 네임으로 만든다)


import fs from 'fs';

let name = 'ijs';
let year = '2023'
let month = '03'
let day = '20'
let fileName = year + month + day + '-' + name;

fs.writeFileSync("./" + fileName + ".txt", name);

//? getSeconds, getMinutes, getFullYear
//? 사용자가 개발 코드를 몰라도 파일을 생성할 수 있다
//? 5가지의 과정이 필요한데 그것을 절차적 과정으로 줄여서 표현 한 것

