const arrayMethods = {

  myForEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (array.hasOwnProperty(i)) cb(array[i], i);
    }
    return undefined;
  },

  myMap(array, cb) {
    const mapped = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
      if (array.hasOwnProperty(i)) {
        mapped[i] = cb(array[i], i);
      }
    }
    return mapped;
  },

  myFilter(array, cb) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!array.hasOwnProperty(i)) continue;
      if (cb(array[i], i)) {
        filteredArray[filteredArray.length] = array[i];
      }
    }
    return filteredArray;
  },

  myReduce(array, cb, initial) {
    let acc = initial > 0 ? initial : 0;
    for (let i = 0; i < array.length; i++) {
      if (array.hasOwnProperty(i)) {
        cb(acc, array[i], i);
        acc += array[i];
      }
    }
    return acc;
  },

  myFindIndex(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (!array.hasOwnProperty(i)) continue;
      if (cb(array[i], i)) return i;
    }
  },

  myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (!array.hasOwnProperty(i)) continue;
      if (!cb(array[i], i)) return false;
    }
    return true;
  }
};

module.exports = arrayMethods;