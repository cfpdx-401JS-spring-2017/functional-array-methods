const arrayMethods = {


    forEach(array, fn) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === undefined) continue;
            fn(array[i], i);
        }
        return undefined;
    }

};




module.exports = arrayMethods;