function format(num) {
  return num
    .toFixed(2)
    .replace(/(\B)(?=(\d{3})+$)/g, ',')
    .replace(/^/g, '$ ');
}

console.log(format(1888));
