const assert = require('chai').assert;
const arrayMethods = require('./arrayMethods');

describe('ForEach', () => {
    it('calls fn with each item in array', () => {
        forEach(array, (item, index) => {
            array[i] = item + 1;
        });
        assert.deepEqual(array, [2, 3, 4]);

    });

});