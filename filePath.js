let regex = /^[a-zA-z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/g;
let str1 = 'F:\\study\\javascript\\regex\\regular expression.pdf';
let str2 = 'F:\\study\\javascript\\regex\\';
let str3 = 'F:\\study\\javascript';
let str4 = 'F:\\';

console.log(regex.test(str4));
