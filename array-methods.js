function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!array.hasOwnProperty(i)) continue;

    callback(array[i], i);
  }
  return undefined;
}

function map(array, callback) {
  const mapped = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      mapped[i] = callback(array[i], i);
    }
  }
  return mapped;
}

function filter(array, callback) {
  const filtered = [];

  for (let i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      const returned = callback(array[i], i);

      if (returned) filtered[filtered.length] = returned;
    }
  }
  return filtered;
}

function reduce(array, callback, initialValue = null) {
  let output = initialValue;

  for (let i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      if (i === 0 && initialValue === null) {
        output = array[i];

        if (array[i + 1] !== undefined) {
          i++;
        } else {
          continue;
        }
      }
      output = callback(output, array[i], i);
    }
  }
  return output;
}

function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i) && callback(array[i], i)) return i;
  }
  return -1;
}

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i) && !callback(array[i], i)) return false;
  }
  return true;
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  findIndex,
  every
};