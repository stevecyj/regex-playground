let string = '#ffbbad #Fc01Df #FFF #ffE';
let regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
console.log(string.match(regex));
