// (.)單詞的第一個字母
// ?，單詞結尾可能有空白

function camelize(str) {
  return str.replace(/[-_\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : '';
  });
}

console.log(camelize('-moz_transform '));
