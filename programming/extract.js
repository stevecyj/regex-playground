let regex = /^(\d{4})\D(\d{2})\D(\d{2})$/
let str = '2017-06-26'
regex.test(str)
console.log(RegExp.$1,RegExp.$2,RegExp.$3)

let date=[]
str.replace(regex,function(match,year,month,day){
  date.push(year,month,day)
})
console.log(date)