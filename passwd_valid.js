let regex =
  /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9a-zA-Z]{6,12}$/g;

// console.log(regex.test('1234567'));
// console.log(regex.test('abcdef'));
// console.log(regex.test('ABCDEFG'));
// console.log(regex.test('ab23c'));
// console.log(regex.test('ABCDEF234'));
console.log(regex.test('abcdEF234'));
