function filter(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      if (callback(array[i], i) === false){
        return false;
      }
    }
  }
  return true;
}



module.exports = filter;

