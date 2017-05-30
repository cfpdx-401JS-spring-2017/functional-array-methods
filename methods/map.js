function map(array, callback) {
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i) && array[i] !== undefined) {
      newArray.push(callback(array[i], i));
    }
  }
  return newArray;
}



module.exports = map;

