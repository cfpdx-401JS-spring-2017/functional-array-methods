const assert = require('chai').assert;
const { forEach, map } = require('../array-methods');


describe('forEach', () => {
  const animals = ['cats', , 'dogs', 'bears'];
  let elements = [];
  let indexes = [];

  it('calls the callback once for each item in the array, skipping holes', () => {
    forEach(animals, (element) => elements.push(element));
    
    assert.equal(elements.length, 3);
  });

  it('pushes the index into the array for each element', () => {
    forEach(animals, (element, idx) => indexes.push(idx));
    
    assert.equal(indexes.length, 3);
    assert.equal(indexes[2], 3);
  });

  it('returns undefined', () => {
    let returnValue = null;
    returnValue = forEach(animals, (element) => indexes.push(element));

    assert.equal(returnValue, undefined);
  });
});

describe('map', () => {
  const numbers = [1, undefined, 2, , 3];

  let doubles = null;
  let indexes = null;

  it('creates a new array with the return value of each called callback', () => {
    doubles = map(numbers, (element) => element * 2);

    assert.deepEqual(doubles, [2, NaN, 4, , 6]);
  });

  it('returns array of element indexes', () => {
    indexes = map(numbers, (element, idx) => {
      return idx;
    });

    assert.deepEqual(indexes, [0, 1, 2, , 4]);
  });
});