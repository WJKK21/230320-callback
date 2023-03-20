function mo (f, s, call) {
  let a = f + s ;
  return call(a)
}

const one = mo(1,2, function(result) {
  let toto = result* 2
  return toto
})

console.log(one)