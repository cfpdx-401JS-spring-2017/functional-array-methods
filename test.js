const assert = require('chai').assert;
const methods = require('./array');
const {push, forEach, map, filter, findIndex, every} = methods;

describe('push', () => {
    it('adds and returns new length', () => {
        const array = [1, 2, 3];
        const length = push(array, 4);
        assert.equal(length, 4);
        assert.equal(array[3], 4);
    });
});

describe('forEach', () => {
    it('calls fn with each item in array', () => {
        const array = [1, 2, 3];
        forEach(array, (item, index) => {
            array[index] = item + 1;
        });
        assert.deepEqual(array, [2,3,4]);
        
    });
});

describe('map', () => {
    it('calls fn with each item in array and returns new array', () => {
        const array = [1, 2, 3];
        map(array, (item, index) => {
            array[index] = item + 1;
        });
        assert.deepEqual(array, [2,3,4]);
        
    });
});

describe('filter', () => {
    it('creates a new array with all items whose callback returned `true` or a truthy value', () => {
        const array = [1, 2, 3];
        let newArr = filter(array, (item, index) => {
            return item > 1;
        });
        assert.deepEqual(newArr, [2,3]);
    });
});

describe('findIndex', () => {
    it('returns the index of the first item whose callback returns `true` or a truthy value', () => {
        const array = [1, 2, 3];
        let index = findIndex(array, (item, index) => {
            return item > 1 && item < 3;
        });
        assert.deepEqual(index, 1);
    });
});

describe('every', () => {
    it('Returns the `true` if every item in the array has returned `true`, otherwise `false', () => {
        const array = [1, 2, 3];
        let value = every(array, (item, index) => {
            return item > 0 ;
        });
        assert.deepEqual(value, true);
    });
});



