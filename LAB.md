<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Functional Array Methods
===

## Description

This is a solo assignment. Try and do these from scratch, **do not google solutions**.

Implement select array methods from scratch (only use `array.length`, `array[i] = value`, `value = array[i]`). 

For example, `push` would look like:

```js
function push(array, item) {
  array[array.length] = item;
  return array.length;
}
```

## Methods to Implement

### `forEach`

Takes a callback of signature (parameter definition) `(item, index, array) => {}` 
and calls the function for each item in the array. Skips any `undefined` array item values.
Returns `undefined`.

### `map`

Takes a callback of signature (parameter definition) `(item, index, array) => {}` 
and creates a new array with the return value of each called callback. Skips any `undefined` array item values, but 
puts `undefined` for that item in the new array. Returns the "mapped" new array.

### `filter`

Takes a callback of signature (parameter definition) `(item, index, array) => {}` 
and creates a new array with all items whose callback returned `true` or a truthy value.

* `reduce`
* `some`
* `findIndex`

You need to include tests for each method. 

