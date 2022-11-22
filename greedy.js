let regex = /\d{2,5}/g;
let regexA = /\d{2,5}?/g;
let string = '123 1234 12345 123456';
console.log(string.match(regexA));
