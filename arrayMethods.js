const arrayMethods = {


    forEach(array, fn) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === undefined) continue;
            fn(array[i], i);
        }
        return undefined;
    },


    map(array, fn) {
        const mappedArray = [];
        for (var i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i) === false) {
                mappedArray[i] = '' ;
                continue;
            } else if
            (array[i] === undefined) {
                mappedArray[i] = undefined;
                continue;
            }

            fn(array[i], i);
            mappedArray[i] = array[i];
        }

        return mappedArray;
    }




};

module.exports = arrayMethods;