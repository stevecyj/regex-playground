function dasherize(str){
  return str.replace(/([A-Z])/g,'-$1').replace(/[-](.)/g,function(c){
    return c.toLowerCase()
  })
}

console.log(dasherize('MozTransform'))