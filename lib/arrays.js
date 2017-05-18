const methods = {

  forEachFn(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) continue;
      cb(arr[i], i);
    }
    return undefined;
  },

  mapFn(arr, cb) {
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        mappedArr[i] = undefined;
        continue;
      }
      cb(arr[i], i);
      mappedArr[i] = arr[i];
    }
    return mappedArr;
  },

  filterFn(arr, cb) {
    let filteredArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if ((cb(arr[i], i)) === true) {
        filteredArr[count] = arr[i];
        count += 1;
      }
    }
    return filteredArr;
  },

  reduceFn(arr, cb, init) {
    let acc = init > 0 ? init : 0;
    for (let i = 0; i < arr.length; i++) {
      cb(acc, arr[i], i);
      acc += arr[i];
    }
    return acc;
  },

  findIndexFn(arr, cb) {

  }
};

module.exports = methods;