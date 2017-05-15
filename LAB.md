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

**You need to include tests for each method**

### `forEach(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and calls the function for each item in the array. Skips any `undefined` array item values.

Returns `undefined`.

### `map(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and creates a new array with the return value of each called callback. 
Skips any `undefined` array item values, but 
puts `undefined` for that item in the new array. 

Returns the "mapped" new array.

### `filter(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and creates a new array with all items whose callback returned `true` or a truthy value.

Returns the new array of "filtered" items.

### `reduce(array, callback [, initialValue])`

Takes a callback of signature `(accumulator, item, index) => {}` and an (optional) 
second `initialValue` parameter that is the initial value of the accumulator. After each function
call, the return value is passed as the accumulator argument of the next function call.

If the second `initialValue` parameter is not supplied, the first function call should be the 
first item as the `accumulator`, and the second array item as the `item`.

Returns the final accumulator value.

### `findIndex(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and returns the index of the first item whose callback returns `true` or a truthy value.

Returns the index of the found item, `-1` if no item is found.

### `every(array, callback)`

Takes a callback of signature `(item, index) => {}` 
and returns an overall `true` value if **all** callback return `true` or a truthy value.

Returns the `true` if every item in the array has returned `true`, otherwise `false`.

