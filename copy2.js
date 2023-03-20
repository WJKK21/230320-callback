const exampleArray = [5,2,7,9, 324,66,44]
function minValue(array, callback) {
  let min = array[0];
  for ( let i = 1; i<array.lenght; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return callback(min);
}
const minValueExample = minValue( exampleArray, function(result){
  return result * 2;
})

console.log(minValueExample)