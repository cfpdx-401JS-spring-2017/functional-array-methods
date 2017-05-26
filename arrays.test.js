const assert = require('chai').assert;
const arrayMethods = require('./arrayMethods');

describe('ForEach', () => {
    it('calls fn with each item in array', () => {
        const array = [1, 2, 3, undefined, , 4];


        const results = arrayMethods.forEach(array, (item, index) => {
            array[index] = item + 1;
        });

        assert.deepEqual(array, [2, 3, 4, undefined, , 5]);
        assert.equal(results, undefined);

    });

});

describe('map', () => {
    it('calls fn for each item in array and returns new array with callbacked items', () => {
        const array = [1, 2, 3, , 4, undefined];

        const mappedArray = arrayMethods.map(array, (item, index) => {
            return item + 1;

        });
        assert.deepEqual(mappedArray, [2, 3, 4, , 5, NaN]);
        assert.notDeepEqual(mappedArray, array);

    });

});

describe('filter', () => {
    it('calls fn for each item in array and returns new array with callbacked items that evaluate to truth or tuthy', () => {
        const array = [1, 2, 3, , 4, undefined];
        //index=current index value [0,1,2,3,4,5]
        //item=each item in array[1,2,3,4,undefined]
        const filteredArray = arrayMethods.filter(array, (item, index) => {
            return item > 2;
        });
        assert.deepEqual(filteredArray, [3, 4]);
    });
});

describe('findIndex', () => {

    it('calls fn for items in array, returns index of first true item & skips holes', () => {
        const array = [1, 2, 3, , 4, undefined];
        const findResults = arrayMethods.findIndex(array, (item, index) => {
            return item === 4;
        });
        assert.equal(findResults, 4);
    });


    it('returns -1 if no item found,', () => {
        const array = [1, 2, 3, , 4, undefined];
        const findResults = arrayMethods.findIndex(array, (item, index) => {
            return item > 4;
        });
        assert.equal(findResults, -1);
    });
});

describe('every', () => {
    it('returns true if every item in array if all callback returns true', () => {
        const array = [1, 2, 3, , 4];
        const results = arrayMethods.every(array, (item, index) => {
            return item > 0;
        });
        assert.equal(results, true);
    });

    it('otherwise it returns false', () => {
        const array = [1, 2, 3, , 4];
        const results = arrayMethods.every(array, (item, index) => {
            return item < 3;
        });
        assert.equal(results, false);
    });
});

