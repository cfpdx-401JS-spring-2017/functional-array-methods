function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!array.hasOwnProperty(i)) continue;

    callback(array[i], i);
  }
  return undefined;
}

function map(array, callback) {
  let mapped = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      mapped[i] = callback(array[i], i);
    }
  }
  return mapped;
}

module.exports = {
  forEach,
  map
};