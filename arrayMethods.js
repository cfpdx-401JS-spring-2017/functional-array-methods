const arrayMethods = {

    forEach(array, fn) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) continue;
            fn(array[i], i);
        }
        return undefined;
    },


    map(array, fn) {
        const mappedArray = new Array(array.length);
        for (let i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i)) {
                mappedArray[i] = fn(array[i], i);
            }
        }
        return mappedArray;
    },


    filter(array, fn) {
        const filteredArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!array.hasOwnProperty(i)) {
                continue;
            }
            if (fn(array[i], i)) {
                filteredArray[filteredArray.length] = array[i];
            }
        }
        return filteredArray;
    },

    findIndex(array, fn) {
        for (let i = 0; i < array.length; i++) {
            if (!array.hasOwnProperty(i)) {
                continue;
            } else if (fn(array[i], i)) {
                return i;
            }
        }
        return -1;
    },

    every(array, fn) {
        for (let i = 0; i < array.length; i++) {
            if (!array.hasOwnProperty(i)) {
                continue;
            }
            const results = fn(array[i], i);

            if (!results) {
                return false;
            }
        }
        return true;
    },


    reduce(array, fn, initialValue) {
        let acc = initialValue;
        let currentItem;
        for (let i = 0; i < array.length; i++) {
            if (!array.hasOwnProperty(i)) {
                continue;
            }
            if (!initialValue) {
                acc = array[i];
                currentItem = array[i + 1];
                fn(acc, currentItem, i);
            }
            else {
                currentItem = array[i];
                acc = fn(acc, currentItem, i);

            }
        }
        return acc;

    }
};

module.exports = arrayMethods;





