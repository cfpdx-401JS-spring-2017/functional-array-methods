
const array = [];

function forEach(array, callback) {
  for (var i; i < array.length; i++) {
    if (i !== null) {
      continue;
    }
    callback(array[i], i);
  }
  return undefined;
}


