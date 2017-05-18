const assert = require('chai').assert;
const arrayMethods = require('../methods');

describe('methods', () => {


  it('forEach takes in an array and calls a function for each item in the array, unless item is undefined', () => {
    const array = [2, 3, 4, undefined, 5];
    let count = 0;
    let indexArr = [];
    const result = arrayMethods.myForEach(array, (item, index) => {
      count += item;
      indexArr.push(index);
    });
    assert.equal(count, 14);
    assert.deepEqual(indexArr, [0, 1, 2, 4]);
    assert.equal(result, undefined);
  });

  it('map takes in an array and returns a new array after calling a function on each item', () => {
    const array = [1, 2, undefined, 4];

    const returned = arrayMethods.myMap(array, (item, index) => {
      array[index] += 2;
    });
    assert.equal(returned[0], 3);
    assert.equal(returned[1], 4);
    assert.deepEqual(returned, [3, 4, undefined, 6]);
  });

  it('filter takes in an array and returns a new array after filtering out items based on the callback', () => {
    const array = [5, 10, undefined, 20, 30, 40];

    const returned = arrayMethods.myFilter(array, (item, index) => {
      return array[index] > 10;
    });
    assert.equal(returned[1], 30);
    assert.deepEqual(returned, [20, 30, 40]);
  });

  it('reduce takes in an array and returns an accumulated value based on the callback', () => {
    const array = [15, 2, 20, 30, 40];

    const returnedValue = arrayMethods.myReduce(array, (acc, item, index) => {
      return array[index] += 15;
    }, 5);
    assert.equal(returnedValue, 187);
  });
});