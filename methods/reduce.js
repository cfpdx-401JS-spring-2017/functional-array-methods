function reduce(array, callback, initialValue) {
  let acc = initialValue;
  let item;

  for (var i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      if (acc === undefined) {
        acc = array[i];
        item = array[i + 1];
      } else {
        item = array[i];
        acc = callback(acc, item, i);
      }
    }
  }
  return acc;
}


module.exports = reduce;

