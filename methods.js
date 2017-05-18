const arrayMethods = {

  myForEach(array, cb) {

    for (let i = 0; i < array.length; i++) {
      if (array[i] === undefined) continue;
      cb(array[i], i);
    }
    return undefined;
  },

  myMap(array, cb) {

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if(array[i] === undefined) {
        newArray[i] = undefined;
        continue; 
      }
      cb(array[i], i);
      newArray[i] = array[i];
    }
    return newArray;
  },

  myFilter(array, cb) {
    let count = 0;
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if(cb(array[i], i) === true) {
        filteredArray[count] = array[i]; 
        count ++;
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
      if(cb(array[i], i) === true) return i;
    }
  }, 

  myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if(cb(array[i], i) !== true) return false;
    } 
    return true;
  }
};

module.exports = arrayMethods;