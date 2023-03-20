function one(first, second, callback) { // 매개변수 3개가 있는 one이 있음
  let addResult = first + second; // 매개변수 first + second 
  return callback(addResult) // callback 안에 addResult를 반환함 
}

const oneCallback = one(1,2, function(result) { //oneCallback은 one 안에  1,2 ,function을 넣는 함수
  let callbackResult = result *2 // function 값 안에 있는 거 두번 곱함
  return callbackResult // 돌려줘 반환해줘
})

console.log(oneCallback) // oneCallback 보여줘