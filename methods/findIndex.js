function findIndex(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      if (callback(array[i], i) === true){
        return i;
      }
    }
  }
  return -1;
}



module.exports = findIndex;

