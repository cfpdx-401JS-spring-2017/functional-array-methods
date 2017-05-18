const chai = require('chai');
const assert = chai.assert;
const forEach = require('../methods/forEach');

describe('forEach', () => {

  it('performs function on each item in array', () => {
    const array = [2, 3, 4];
    forEach(array, (item, index) => {
      array[index] = item + 1;
    });
    assert.deepEqual(array, [3, 4, 5]);
  });
});