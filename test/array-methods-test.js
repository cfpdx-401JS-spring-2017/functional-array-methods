const assert = require('chai').assert;

let forEachArr = [];

const animals = ['cats', 'dogs', 'bears'];

describe('forEach', () => {
  it('calls the callback once for each item in the array', () => {
    forEach(animals, push);
    
    assert.equal(forEachArr.length, 3);
  });
});