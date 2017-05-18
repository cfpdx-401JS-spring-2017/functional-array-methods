function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (i === null) {
      continue;
    }
    callback(array[i], i);
  }
  return undefined;
}



module.exports = forEach;


