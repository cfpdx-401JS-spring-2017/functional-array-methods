const chai = require('chai');
const assert = chai.assert;
const every = require('../methods/every');

describe.only('every', () => {

  it('returns false for an array of odd and even numbers', () => {
    const array = [1, 2, 3, 4, 5, 6];
    let result = every(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, false);
  });

  it('ignores hole and returns true for all even numbers', () => {
    const array = [2, , 4];
    let result = every(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, true);
  });

  it('returns false and does not ignore undefined', () => {
    const array = [2, undefined, 4];
    let result = every(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, false);
  });
});
