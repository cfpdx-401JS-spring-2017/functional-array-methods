const assert = require('chai').assert;
const forEach = require('../array-methods');

let elements = [];
let index = [];

const animals = ['cats', undefined, 'dogs', 'bears'];

describe('forEach', () => {
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