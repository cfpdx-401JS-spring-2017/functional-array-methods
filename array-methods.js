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

module.exports = {
  forEach,
  map,
  filter
};