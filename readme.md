# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stephane.krims/lotide`

**Require it:**

`const _ = require('@stephane.krims/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([array])`: returns the first element of an array
* `middle([array])`: returns the middle of an array (a single element if it has an odd number of elements, and two elements if even)
* `tail([array])`: returns every element in an array except the first
* `countLetters("string")`: returns an object showing the number of times each letter appears in a string
* `countOnly({object1}, {object2})`: counts only the properties of object1 which are true in object2
* `findKey({object}, function)`: finds the first key in the object which passes (return true) the function
* `findKeyByValue({object}, "string")`: finds the key in an object whose value matches the string
* `flatten([array])`: removes a single layer of nesting from an array
* `letterPositions("string")`: returns an object with arrays showing which index/indeces each letter has in the string
* `map([array], function)`: returns a new array with each element of the original array passed through the function
* `takeUntil([array], function)`: returns a new array with each element up until the first one that doesn't pass (return true) the function
* `without([array1], [array2])`: returns a new array that's like array1 but without any of the elements in array2
* `eqArrays([array1], [array2])`: returns true if two arrays are identical, false if not
* `eqObjects({object1}, {object2})`: ditto for objects