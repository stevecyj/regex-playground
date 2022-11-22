let regexA = /ab{2,5}c/g;
let regex = /a[123]b/g;
let string_a = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';
let string = 'a0b a1b a2b a3b a4b';
// console.log(string.match(regex));
console.log(string_a.match(regexA));
