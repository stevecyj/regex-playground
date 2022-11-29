let str = '2017.06.27'
let regex=/\b(\d+)\b/g
let result

while (result=regex.exec(str)) {
  console.log(result,regex.lastIndex)
}