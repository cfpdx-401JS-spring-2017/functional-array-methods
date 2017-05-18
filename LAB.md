<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Functional Array Methods
===

## Description

This is a solo assignment. Try and do these from scratch, **do not google solutions**. Relevant info is in lab details below.

Implement select array methods from scratch (only use `array.length`, `array[i] = value`, `value = array[i]`). 

For example, `push` might look like:

```js
// tests
describe('push', () =>
    it('adds and returns new length', () => {
        const array = [1, 2, 3];
        const length = push(array, 4);
        assert.equal(length, 4);
        assert.equal(array[3], 4);
    });
});

// function
function push(array, item) {
  array[array.length] = item;
  return array.length;
}
```

## Methods to Implement

Some of the specs for the lab are less onerous than the entire JavaScript specification for the method (for example, no third `array` parameter). The "callback signature" refers to the parameter definition of the supplied callback function.

#### Array Holes

An array hole is a not defined index property on an array. For example, `const arr = [1,,3]` will have a "hole" meaning there is no index 1 defined for that array. This is different than `const arr = [1, undefined, 3]` because the array _will_ have an index 1 defined for the array, but it's value will be `undefined`.

You can best understand this by looking at the `console` output for the following arrays, one with holes, and one with the value `undefined` in each element of the array:

![image](https://cloud.githubusercontent.com/assets/478864/26217500/7e1a2c96-3bbc-11e7-9afb-0a5f51cb68c7.png)

The only way to check for a hole is to use `.hasOwnProperty(property)`:

![image](https://cloud.githubusercontent.com/assets/478864/26217549/a467d920-3bbc-11e7-9fb6-af2bcd470a52.png)

**You need to include tests for each method**

### `forEach(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and calls the function for each item in the array. Skips any holes in the array.

Any holes in the array should be skipped (don't call the callback function).

Returns `undefined`.

### `map(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and creates a new array with the return value of each called callback. 
Skips any holes in the array, and mapped array should have hole in same spot. The mapped array should have
the same `.length` value as the original array.

Returns the "mapped" new array.

### `filter(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and creates a new array with all items whose callback returned `true` or a truthy value. Any holes
in the array should be skipped (don't call the callback function).

Returns the new array of "filtered" items.

### `reduce(array, callback [, initialValue])`

Takes a callback of signature `(accumulator, item, index) => {}` and an (optional) 
second `initialValue` parameter that is the initial value of the accumulator. After each function
call, the return value is passed as the accumulator argument of the next function call.

If the second `initialValue` parameter is not supplied, the first function call should be the 
first item as the `accumulator`, and the second array item as the `item`.

Any holes in the array should be skipped (don't call the callback function).

Returns the final accumulator value.

### `findIndex(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and returns the index of the first item whose callback returns `true` or a truthy value.

Any holes in the array should be skipped (don't call the callback function).

Returns the index of the found item, `-1` if no item is found.

### `every(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and returns an overall `true` value if **all** callback return `true` or a truthy value.

Any holes in the array should be skipped (don't call the callback function).

Returns the `true` if every item in the array has returned `true`, otherwise `false`.

