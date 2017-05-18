const assert = require('chai').assert;
const forEach = require('../array-methods');

let forEachArr = [];

const animals = ['cats', undefined, 'dogs', 'bears'];

describe('forEach', () => {
  it('calls the callback once for each item in the array', () => {
    forEach(animals, (element) => forEachArr.push(element));
    
    assert.equal(forEachArr.length, 3);
  });
});