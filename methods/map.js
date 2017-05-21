function map(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i) && array[i] !== undefined) {
      callback(array[i], i);
    }
  }
  return undefined;
}



module.exports = map;

