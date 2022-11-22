let regex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/g;
let str = '2017-06-10';
console.log(regex.test(str));
