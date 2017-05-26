const arrayMethods = {

  myForEach(array, cb) {

    for (let i = 0; i < array.length; i++) {
      if (array[i] === undefined) continue;
      cb(array[i], i);
    }
    return undefined;
  },

  myMap(array, cb) {
    const mapped = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
      if (array.hasOwnProperty(i) === undefined) continue;
      else if (array[i] === undefined) {
        mapped[i] = undefined;
        continue;
      }
      cb(array[i], i);
      mapped[i] = array[i];
    }
    return mapped;
  },

  myFilter(array, cb) {
    let count = 0;
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (cb(array[i], i) === true) {
        filteredArray[count] = array[i];
        count++;
        // make sure holes are taken into account [...].filter(b => true); should return empty array.
      }
    }
    return filteredArray;
  },

  myReduce(array, cb, initial) {
    let acc = initial > 0 ? initial : 0;
    for (let i = 0; i < array.length; i++) {
      cb(acc, array[i], i);
      acc += array[i];
    }
    return acc;
  },

  myFindIndex(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (cb(array[i], i) === true) return i;
    }
  },

  myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (cb(array[i], i) !== true) return false;
    }
    return true;
  }
};

module.exports = arrayMethods;