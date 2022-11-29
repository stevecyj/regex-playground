(function () {
  let regexInput = document.getElementById('regex');
  let textInput = document.getElementById('text');
  let runBtn = document.getElementById('run');
  let errBox = document.getElementById('err');
  let resultBox = document.getElementById('result');

  // button event
  runBtn.onclick = function () {
    // 歸零
    errBox.innerHTML = '';
    resultBox.innerHTML = '';

    // 取得 input 內容
    let text = textInput.value;
    let regex = regexInput.value;
  };

  // input 提示
  if (regex == '') {
    errBox.innerHTML = '請輸入正則表達式';
  } else if (text == '') {
    errBox.innerHTML = '請輸入測試內容';
  } else {
    regex = createRegex(regex);
    if (!regex) {
      return;
    }
    let result,
      results = [];
  }

  // 沒有修飾符 g, 會無限循環
  if (regex.global) {
    while (result=regex.exec(text)) {
      results.push(result)
    }
  } else {
    results.push(regex.exec(text))
  } 
});
