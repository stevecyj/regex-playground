// 加、不加?號都可以
function titleize(str) {
  return str.replace(/(?:^|\s)\w/g, function (c) {
    return c.toUpperCase();
  });
}

console.log(titleize('my name is epeli gogo jojo'));
