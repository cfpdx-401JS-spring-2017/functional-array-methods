const assert = require('chai').assert;
const arrayMethods = require('./arrayMethods');

describe('ForEach', () => {
    it('calls fn with each item in array', () => {
        const array = [1, 2, 3, undefined, 4];

        arrayMethods.forEach(array, (item, index) => {
            array[index] = item + 1;
        });
        assert.deepEqual(array, [2, 3, 4, undefined, 5]);

    });

});

describe('map', () => {
    it('calls fn for each item in array and returns new array with callbacked items', () => {
        const array = [1, 2, 3, , 4, undefined];


        const mappedArray = arrayMethods.map(array, (item, index) => {
            array[index] = item + 1;

        });
        assert.deepEqual(mappedArray, [2, 3, 4, 5, undefined]);

    });

});