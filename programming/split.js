let regex = /,/
let str = 'html,css,javascript'
console.log(str.split(regex))

let regexA=/\D/
console.log('2017/06/26'.split(regexA))
console.log('2017.06.26'.split(regexA))
console.log('2017-06-26'.split(regexA))