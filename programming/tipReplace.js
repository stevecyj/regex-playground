/**
 * @match 比對到的結果
 * @$1 第1個群組
 * @$2 第2個群組
 * @index 開始的位置
 * 
 */
'1234 2345 3456'.replace(/(\d)\d{2}(\d)/g,function(match,$1,$2,index,input){
  console.log([match,$1,$2,index,input])
})