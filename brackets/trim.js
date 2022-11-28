function trimA(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

// ? 惰性
function trimB(str){
  return str.replace(/^\s*(.*?)\s*$/g,'$1')
}

console.log(trimB('   foobar       '));
