var regexA = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string = '#ffbbad #Fc01DF #FFF #ffe';
console.log(string.match(regexA));

// 排除
var regex = /^([0-1][0-9]|[2][0-3]):[0-5][0-9]$/g;
// console.log(regex.test('23:59'));
console.log(regex.test('02:07'));
