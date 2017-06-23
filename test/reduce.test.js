const chai = require('chai');
const assert = chai.assert;
const reduce = require('../methods/reduce');

describe.only('reduce', () => {

  it('takes an accumulator and initial value', () => {
    let array = [1, 2, 3, 4];
    let acc = reduce(array, (acc, item, i) => {
      return acc + item;
    }, 1);

    assert.deepEqual(acc, 11);
  });

  it('takes no initial value', () => {
    let array = [1, 2, 3, 4];
    let acc = reduce(array, (acc, item, i) => {
      return acc + item;
    });

    assert.deepEqual(acc, 10);
  });
});