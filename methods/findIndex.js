function findIndex(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i) && array[i] !== undefined) {
      if (callback(array[i], i) === true){
        return array[i];
      }
    }
  }
}



module.exports = findIndex;

