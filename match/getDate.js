let regex = /(\d{4})-(\d{2})-(\d{2})/;

let string = '2017-06-12';

// console.log(string.match(regex));

// regex.test(string);

let result = string.replace(regex, '$2/$3/$1');
console.log(result);
