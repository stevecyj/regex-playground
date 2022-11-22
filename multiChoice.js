let regex = /good|nice/g;
let regexA = /good|goodbye/g;
let regexB = /goodbye|good/g;
let string = 'good idea, nice try.';
let string_a = 'goodbye';
// console.log(string.match(regex));
console.log(string_a.match(regexB));
