// let regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/
// 比對前方的括號 group
let regex2 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/
let str1 = '2017-06-12'
let str2 = '2017/06/12'
let str3 = '2017.06.12'
let str4 = '2017-06/12'
console.log(regex2.test(str1))
console.log(regex2.test(str2))
console.log(regex2.test(str3))
console.log(regex2.test(str4))