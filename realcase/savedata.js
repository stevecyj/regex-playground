var utils = {};
'Boolean|Number|String|Function|Array|Date|RegExp|Object|Error'
  .split('|')
  .forEach(function (item) {
    utils['is' + item] = function (obj) {
      return {}.toString.call(obj) == '[object ' + item + ']'; //留意空格
    };
  });

  console.log(utils.isArray([1,2,3]))

// var utils = {};
// 'Boolean|Number|String|Function|Array|Date|RegExp|Object|Error'
//   .split('|')
//   .forEach(function (item) {
//     utils['is' + item] = function (obj) {
//       return {}.toString.call(obj) == '[object ' + item + ']';
//     };
//   });
// console.log(utils.isArray([1, 2, 3]));
