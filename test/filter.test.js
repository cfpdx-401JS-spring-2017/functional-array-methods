const chai = require('chai');
const assert = chai.assert;
const filter = require('../methods/filter');

describe.only('filter', () => {

  it('performs method on each item of array and returns an array', () => {
    const array = [1, 2, 3, 4, 5, 6];
    let na = filter(array, (item, index) => {
      return item % 2;
    });
    assert.deepEqual(na, [2, 4, 6]);
  });

  it('performs function on each valid item in array', () => {
    const array = [2, , 4];
    filter(array, (item, index) => {
      return item % 2;
    });
    assert.deepEqual(array, [2, 4]);
  });

  it('performs function on each item in array, including undefined', () => {
    const array = [2, undefined, 4];
    filter(array, (item, index) => {
      return item % 2;
    });
    assert.deepEqual(array, [2, 4]);
  });
});
