const { assert } = require('chai');
const { forEach, map, filter, reduce, findIndex } = require('../array-methods');


describe('forEach', () => {
  const animals = ['cats', , 'dogs', 'bears'];
  const elements = [];
  const indexes = [];

  it('calls the callback once for each item in the array, skipping holes', () => {
    forEach(animals, animal => elements.push(animal));
    
    assert.equal(elements.length, 3);
  });

  it('pushes the index into the array for each element', () => {
    forEach(animals, (animal, idx) => indexes.push(idx));

    assert.equal(indexes.length, 3);
    assert.equal(indexes[2], 3);
  });

  it('returns undefined', () => {
    const returnValue = forEach(animals, animal => indexes.push(animal));

    assert.equal(returnValue, undefined);
  });
});

describe('map', () => {
  const numbers = [1, undefined, 2, , 3];

  it('creates a new array with the return value of each called callback', () => {
    const doubles = map(numbers, number => number * 2);

    assert.deepEqual(doubles, [2, NaN, 4, , 6]);
  });

  it('returns array of element indexes', () => {
    const indexes = map(numbers, (number, idx) => {
      return idx;
    });

    assert.deepEqual(indexes, [0, 1, 2, , 4]);
  });
});

describe('filter', () => {
  const numbers = [, 2, 4, 6, 8, 0];

  it('creates a new array with all items whose callback returned true or a truthy value, skipping holes', () => {
    const returned = filter(numbers, number => {
      if (number) return number;
    });

    assert.deepEqual(returned, [2, 4, 6, 8]);
  });
});

describe('reduce', () => {
  // TODO: when I add holes to this array, it breaks. why, if the logic is inside of the hasOwnProperty check? 
  const numbers = [1, 2, 3];
  const words = ['sup', 'hey', 'now'];

  it('returns the sum of all numbers using accumulator', () => {
    const accReturned = reduce(numbers, (acc, number) => {
      return acc + number;
    }, 0);

    assert.equal(accReturned, 6);
  });

  it('returns the sum of all numbers, without set accumulator', () => {
    const noAccReturned = reduce(numbers, (acc, number) => {
      return acc + number;
    });

    assert.equal(noAccReturned, 6);
  });

  it('returns concatenated word', () => {
    const wordsReturned = reduce(words, (acc, word) => {
      return acc + word;
    });

    assert.equal(wordsReturned, 'supheynow');
  });
});

describe('findIndex', () => {
  const words = ['sup', , 'hey', 'now'];

  it('returns -1 if it does not find the element', () => {
    const returned = findIndex(words, word => {
      return word === 'hello';
    });

    assert.equal(returned, -1);
  });

  it('returns the index if found', () => {
    const returned = findIndex(words, word => {
      return word === 'now';
    });

    assert.equal(returned, 3);
  });
});

describe('every', () => {
  const numbers = [7, 8, , 9, 10];

  it('returns true if callback returns true for each element', () => {
    const returned = every(numbers, number => number > 5);

    assert.equal(returned, true);
  });

  it('returns false if callback ever returns false', () => {
    const returned = every(numbers, number => number > 10);

    assert.equal(returned, false);
  });
});