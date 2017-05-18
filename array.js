'use strict';

// `array.length`, `array[i] = value`, `value = array[i]`


const methods = {
    push: function (array, item) {
        array[array.length] = item;
        return array.length;
    },

    forEach: function (array, callback) {
        let i = 0; 
        while(i < array.length){
            callback(array[i], i);
            i++;
        }
        return undefined;
    },

    map: function (array, callback) {
        let i = 0;
        let mappedArray = []; 
        while(i < array.length){
            mappedArray[mappedArray.length] = callback(array[i], i);
            i++;
        }
        return mappedArray;
    },

    filter: function (array, callback) {
        let i = 0;
        let mappedArray = []; 
        while(i < array.length){
            if(callback(array[i]) === true) {
              mappedArray[mappedArray.length] = array[i];  
            } 
            i++;
        }
        return mappedArray;
    },

    findIndex: function (array, callback) {
        let i = 0;
        while(i < array.length){
            if(callback(array[i]) === true) {
              return i;
            } 
            i++;
        }
        return false;
    }, 

    every: function (array, callback) {
        let i = 0;
        while(i < array.length){
            if(callback(array[i]) === false) {
              return false;
            } 
            i++;
        }
        return true;
    }
}

module.exports = methods;