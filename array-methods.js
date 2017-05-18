function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;

    callback(array[i], i);
  }
  return undefined;
}

function map(array, callback) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr[newArr.length] = callback(array[i]);
    } else if (array[i] === undefined) {
      newArr[newArr.length] = array[i];
    }
  }
  return newArr;
}

module.exports = {
  forEach,
  map
};