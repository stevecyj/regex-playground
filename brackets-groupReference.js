let regex = /(\d{4})-(\d{2})-(\d{2})/
let string = '2017-06-12'
// console.log(string.match(regex))
// console.log(regex.exec(string))

// string.match(regex)
// console.log(RegExp.$1)
// console.log(RegExp.$2)
// console.log(RegExp.$3)

// 替換
let result = string.replace(regex,'$2/$3/$1')
console.log(result)