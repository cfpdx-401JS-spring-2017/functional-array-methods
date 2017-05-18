const assert = require('chai').assert;
const forEach = require('../array-methods');


describe('forEach', () => {
  const animals = ['cats', undefined, 'dogs', 'bears'];
  let elements = [];
  let index = [];

  it('calls the callback once for each item in the array', () => {
    forEach(animals, (element) => elements.push(element));
    
    assert.equal(elements.length, 3);
  });

  it('pushes the index into the array for each element', () => {
    forEach(animals, (element, idx) => index.push(idx));

    assert.equal(index.length, 3);
    assert.equal(index[2], 3);
  });

  it('returns undefined', () => {
    let returnValue = null;
    returnValue = forEach(animals, (element) => index.push(element));

    assert.equal(returnValue, undefined);
  });
});

describe('map', () => {
  const numbers = [1, undefined, 2, 3];
  let doubles = null;

  it('creates a new array with the return value of each called callback', () => {
    doubles = map(numbers, (element) => element * 2);

    assert.deepEqual(doubles, [2, undefined, 4, 6]);
  });

  it('returns undefined element in return array if original element is undefined', () => {
    assert.equal(doubles[1], undefined);
  });
});