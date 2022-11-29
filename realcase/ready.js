let readyRE = /complete|loaded|interactive/;

let cb = function () {
  alert('載入完畢');
};

function ready(callback) {
  if (readyRE.test(document.readyState) && document.body) {
    callback();
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      function () {
        callback();
      },
      false
    );
  }
  console.log(document.readyState);
}

ready(cb);
