/**
 * 確認實際的正則表達式是什麼
 */
let className = 'high'
let regExp = new RegExp("(^|\s)" + className + "(\s|$)")
console.log(regExp.source)