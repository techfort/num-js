var nj = require('./index');
console.log(nj.ndarray.toString());
var a = nj.ndarray(3, 3, Float64Array);
console.log(a);

var b = nj.fill(a, 2);
// console.log(b);
