let regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/g;

console.log(regex.test('02:07'));
console.log(regex.test('23:59'));
