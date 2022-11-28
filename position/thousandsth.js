// let result = '123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ',');

// console.log(result);

let string = '12345678 123456789';
let regex = /(\B)(?=(\d{3})+\b)/g;
const result = string.replace(regex, ',');
console.log(result);
