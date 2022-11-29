let regex = /([abc])(\d)/g
let str = 'a1b2c3d4e5'
str.match(regex)

// 最後一次目標字串
console.log(RegExp.input,RegExp['$_'])

// 最後比對的內容
console.log(RegExp.lastMatch,RegExp['$&'])

// 最後一次捕獲的內容
console.log(RegExp.lastParen,RegExp['$+'])

// 目標字串中 lastMatch 之前的內容
console.log(RegExp.leftContext,RegExp['$`'])

// 目標字串中 lastMatch 之後的內容
console.log(RegExp.rightContext,RegExp["$'"])