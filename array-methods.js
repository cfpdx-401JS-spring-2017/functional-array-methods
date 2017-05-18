function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) continue;

    callback(array[i], i);
  }
  return undefined;
}

function map(array, callback) {
  let newArr = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      newArr[i] = callback(array[i], i);
    }
  }
  return newArr;
}

module.exports = {
  forEach,
  map
};