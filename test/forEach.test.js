const chai = require('chai');
const assert = chai.assert;
const forEach = require('../methods/forEach');

describe('forEach', () => {

  it('returns undefined', () => {
    let result = forEach([1, 2, 3], (item, index) => {
      index;
    });
    assert.deepEqual(result, undefined);
  });

  it('modifies array in place', () => {
    let array = [1, 2, 3];
    forEach(array, (item, index) => {
      array[index] = item + 1;
    });
    assert.deepEqual(array, [2, 3, 4]);
  });

  it('performs function on each valid item in array', () => {
    const array = [2, , 4];
    forEach(array, (item, index) => {
      array[index] = item + 1;
    });
    assert.deepEqual(array, [3, , 5]);
  });

  it('performs function on each item in array, including undefined', () => {
    const array = [2, undefined, 4];
    forEach(array, (item, index) => {
      array[index] = item + 1;
    });
    assert.deepEqual(array, [3, undefined, 5]);
  });
});

