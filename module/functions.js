function one () {
  return 1;
}

/* function two () {
  return '1';
}
/* 
 */
function tworeturnSting () {
  return '1';
}

two() === '1';

// 리턴이 문자열인 것을 열기 전까지느 알 수가 없다

function isthree () {
  return true;
}

// is가 붙으면 불리언일 확률이 매우 높다
// 함수가 뭐든지 return만 알면 해결이 빨라진다

function four (){
  return {
    a: 1,
    b: '2',
    c: ture   
  }
}

// 객체가 되었다 호출할때까지는 함수인데 호출하면 객체가 된다
// 이렇게 직관적으로 보이지 않기 때문에 디버그에 의존해야 된다
// 리턴만 해결하면 쓸 수 있다

function five () {
  let a = 1 + 1;
}

// c언어에서는 리턴 보이드, 리턴 제로, 리턴이 없다 
// 더하는 행위를 실행만 하는 함수  대표적으로 for 문이다 반복만 되고 새로운 값이 나오지는 않는다 
// dom api는 리턴이 없다 addeventl

