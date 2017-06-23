const chai = require('chai');
const assert = chai.assert;
const findIndex = require('../methods/findIndex');

describe('findIndex', () => {

  it('return first even numbers', () => {
    const array = [1, 2, 3, 4, 5, 6];
    let result = findIndex(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, 2);
  });

  it('ignores hole', () => {
    const array = [2, , 4];
    let result = findIndex(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, 2);
  });

  it('does not ignore undefined', () => {
    const array = [2, undefined, 4];
    let result = findIndex(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, 2);
  });
});
