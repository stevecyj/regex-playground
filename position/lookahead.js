let result = 'hello'.replace(/(?=l)/g, '#');
let resultA = 'hello'.replace(/(?!l)/g, '#');
console.log(result);
console.log(resultA);
