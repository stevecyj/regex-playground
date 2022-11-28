// 1888 to $ 1,888.00

function format(num) {
  return num
    .toFixed(2)
    .replace(/(\B)(?=(\d{3})+\b)/g, ',')
    .replace(/^/g, '$ ');
}

console.log(format(1888));
