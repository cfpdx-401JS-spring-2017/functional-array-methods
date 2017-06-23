const chai = require('chai');
const assert = chai.assert;
const findIndex = require('../methods/findIndex');

describe('findIndex', () => {

  it('return first even numbers', () => {
    const array = [1, 2, 3, 4, 5, 6];
    let result = findIndex(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, 1);
  });

  it('ignores hole', () => {
    const array = [2, , 4];
    let result = findIndex(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(result, 0);
  });

  it('does not ignore undefined', () => {
    const array = [1, undefined, 2, 4];
    let result = findIndex(array, (item, index) => {
      if (item !== undefined) {
        return !(item % 2);
      } 
    });
    assert.deepEqual(result, 2);
  });

  it('returns -1 if no truthy item is found', () => {
    const array = [1, 3, 5, 7];
    let result = findIndex(array, (item, index) => {
      if (item !== undefined) {
        return !(item % 2);
      } 
    });
    assert.deepEqual(result, -1);
  });
});
