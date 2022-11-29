// 使用 replace 處理字串，callback 不回傳
function compress(source) {
  let keys = {};
  source.replace(/([^=&]+)=([^&]*)/g, function (full, key, value) {
    keys[key] = (keys[key] ? keys[key] + ',' : '') + value;
  });
  let result = [];
  for (let key in keys) {
    result.push(key + '=' + keys[key]);
  }
  return result.join('&');
}

console.log(compress('a=1&b=2&a=3&b=4'));
