const array = [2, 3, 4];

function forEach(array, callback) {
  for (var i; i < array.length; i++) {
    callback(array[i], i);
  }
  return undefined;
}
