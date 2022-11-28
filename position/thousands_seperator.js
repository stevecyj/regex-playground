let regex = /(?!^)(?=(\d{3})+$)/g;
let regexA = /(?!\b)(?=(\d{3})+\b)/g;

let string = '12345678 123456789';

let result = '123456789'.replace(regex, ',');
let resultA = string.replace(regexA, ',');

console.log(result);
console.log(resultA);
