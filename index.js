(function () {

  var numjs = {};
  numjs.defaultDtype = Float64Array || Float32Array;


  function copyArgs(func) {
    return function () {
      var args = Object.create(Array.prototype.slice.call(arguments));
      return func.apply(null, args);
    };
  }

  numjs.ndarray = copyArgs(function (rows, cols, dtype) {
    console.log('getting in here...', rows, cols, dtype);
    var type = dtype || numjs.defaultDtype;
    var array = [],
      x = 0,
      y = 0;
    for (x; x < rows; x += 1) {
      var row = new(type)(cols);
      console.log('Row:', row);
      array.push(row);
    }
    console.log('Array', array);
    array.rows = rows;
    array.cols = cols;
    array.type = type;
    return array;
  });

  numjs.fill = function (array, value) {
    console.log('Fill: ', array);
    var x = 0,
      len = array.length;
    console.log('len:', len);
    for (x; x < len; x += 1) {
      console.log(Object.getPrototypeOf(array[x]));
      // array[x] = array[x].fill(value);
    }
    return array;
  };

  module.exports = numjs;

}());
