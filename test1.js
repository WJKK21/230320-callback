function add(a, b, callback) {
  callback(a + b);
}

function sayResult(value) {
  console.log(value);
}

add(3, 4, sayResult);


function add(a, b) {
  return a + b;
}

function sayResult(value) {
  console.log(value);
}

sayResult(add(3, 4));