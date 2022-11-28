let regex=/<([^>]+)>[\d\D]*<\/\1>/
let str1 = '<title>regular expression</title>'
let str2 = '<p>laoyao bye bye</p>'
let str3 = '<title>wrong!</p>'
console.log(regex.test(str1))
console.log(regex.test(str2))
console.log(regex.test(str3))
