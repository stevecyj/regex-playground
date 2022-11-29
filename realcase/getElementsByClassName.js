function getElementsByClassName(className) {
  let elements = document.getElementsByTagName('*');
  let regExp = new RegExp('(^|\\s)' + className + '(\\s|$)');
  let result = [];
  
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    console.log(element.className)
    if (regExp.test(element.className)) {
      result.push(element);
    }
  }
  return result;
}

let highs = getElementsByClassName('high');
highs.forEach(function (item) {
  item.style.color = 'red';
});
