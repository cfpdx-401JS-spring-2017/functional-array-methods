const chai = require('chai');
const assert = chai.assert;
const filter = require('../methods/filter');

describe('filter', () => {

  it('return only even numbers', () => {
    const array = [1, 2, 3, 4, 5, 6];
    let na = filter(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(na, [2, 4, 6]);
  });

  it('ignores hole', () => {
    const array = [2, , 4];
    let na = filter(array, (item, index) => {
      return !(item % 2);
    });
    assert.deepEqual(na, [2, 4]);
  });

  it('does not ignore undefined', () => {
    const array = [2, undefined, 4];
    let na = filter(array, (item, index) => {
      if (item !== undefined) {
        return !(item % 2);
      }
    });
    assert.deepEqual(na, [2, 4]);
  });
});
