/* function six (number, append) {
  if (typeof (number) === "number" && typeof (append) === "number") {
  return number + append;
  } else { 
    console.error('이 매개변수는 숫자여야 동작합니다.');
  }
} */
// ? 함수는 복잡해졌지만 버그는 잡아 냈다 문자열로 보내면 받지 않음


function six (number, append) {
  return number + append;
}
function seven (number, append) {
  return number - append;
}
//? 가짓수가 많아지면 어떻게 할 것인가 
//? 언젠가 한계에 부디치기 마련이다

/* const a = six (1, 2); // ? 데이터가 변한다
console.log(a)
 */

function eight (number, append, callback) {
  let a = number + 1; //2
  let b = append + 2;  // 4
  return callback(a, b)
}
//? 연산이 끝난 것 다음에 알고리즘을 쓰고 싶다 할때 
//? 이것을 동기 방식이라고 한다

function on (number, append, callback) {
  let a = number + 2;
  let b = append + 2;
  return callback (a, b)
}

console.log(eight(1,2, function(a,b){
  return a + b;
})) 
//? 인자를 전달 받고 매개 변수 자리에서 결정된다
/* 
 eight number = 1, append 2 가 들어감 ! */

console.log(eight(3,4, seven))
/*  
?     eight 에 number에 3 , append에 4가 들어감  
todo  eight number + 1, append +2 가 적용됨 그리고 밑에 return callback으로 
      들어가서 number = 4, append = 5가 됨 그걸 seven이 들고감
      seven은 return number 4,- append 5 라서 -2 이 나옴 
      */