const assert = require('chai').assert;
const method = require('../lib/arrays');

describe('Array Methods', () => {

  it('forEach', () => {
    const array = [15, 16, , 17, undefined, 20];
    let indexArr = [];
    let count;
    const returned = method.forEachFn(array, (item, index) => {
      count = array[index] = item + 2;
      indexArr.push(index);
    });
    assert.equal(returned, undefined);
    assert.equal(count, 22);
    assert.deepEqual(indexArr, [0, 1, 3, 5]);
  });


  it('map(array, callback)', () => {
    const array = [42, 24, , 66, undefined, 13];
    const returned = method.mapFn(array, (item, index) => {
      array[index] = item + 2;
    });
    assert.equal(returned.length, array.length);
    assert.deepEqual(returned, [44, 26, , 68, undefined, 15]);
    assert.equal(returned[0], 44);
  });


  it('filter(array, callback)', () => {
    const array = [15, 20, 15, 15, 25];
    const returned = method.filterFn(array, (item, index) => {
      return array[index] >= 20;
    });
    assert.deepEqual(returned, [20, 25]);
    assert.equal(returned.length, 2);
  });


  it('reduce(array, callback [, initialValue])', () => {
    const array = [15, 20, 15, 15, 25];
    const returned = method.reduceFn(array, (acc, item, index) => {
      return array[index] += 2;
    }, 20);
    assert.equal(returned, 120);
  });


  it('findIndex(array, callback)', () => {
    const array = ['tea', 'banana', 'salmoncookie', 'poptart'];
    const returned = method.findIndexFn(array, (item, index) => {
      return array[index] === 'salmoncookie';
    });
    assert.equal(returned, 2);
  });


  it('every(array, callback)', () => {
    const array = ['salmon', 'salad', 'samantha', 'sorry'];
    const returned = method.everyFn(array, (item, index) => {
      return array[index][0] === 's';
    });
    assert.equal(returned, true);
  });


});