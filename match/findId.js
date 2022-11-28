let string = '<div id="container" class="main"></div>';
// let regex = /id=".*?"/g;
let regex = /id="[^"]*"/g;

console.log(string.match(regex)[0]);
