const chai = require('chai');
const assert = chai.assert;
const map = require('../methods/map');

describe('map', () => {

  it('performs method on each item of array and returns an array', () => {
    const array = [10, 12, 14];
    let na = map(array, (item, index) => {
      return array[index] = item + 1;
    });
    assert.deepEqual(na, [11, 13, 15]);
  });

  it('performs function on each valid item in array', () => {
    const array = [2, , 4];
    map(array, (item, index) => {
      return array[index] = item + 1;
    });
    assert.deepEqual(array, [3, , 5]);
  });

  it('performs function on each item in array, including undefined', () => {
    const array = [2, undefined, 4];
    map(array, (item, index) => {
      return array[index] = item + 1;
    });
    assert.deepEqual(array, [3, undefined, 5]);
  });
});
