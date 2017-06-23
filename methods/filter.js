function filter(array, callback) {
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array.hasOwnProperty(i)) {
      if (callback(array[i], i) === true){
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}



module.exports = filter;

