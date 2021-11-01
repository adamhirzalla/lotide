# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adamhirzalla/lotide`

**Require it:**

`const _ = require('@adamhirzalla/lotide');`

**Call it:**

`const results = _.middle([1, 2, 3]) // => [2]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: logs assertion message - Pass/Fail (operator: ===)
* `eqArrays(firstArray, secondArray)`: returns true if both arrays are equal, otherwise false (operator: ===)
* `assertArraysEqual(firstArray, secondArray)`: logs assertion message - Pass/Fail (operator: ===)
* `eqObjects(firstObject, secondObject)`: returns true if both objects are equal, otherwise false (operator: ===)
* `assertObjectsEqual(firstObject, secondObject)`: logs assertion message - Pass/Fail (operator: ===)
* `head(array)`: returns the head element of a given array
* `tail(array)`: returns the tail array of a given array
* `middle(array)`: returns an array of the middle element for a given array 
  * If array length is less than or equal 2: returns an empty array
  * If array length is odd and greater than 2: returns an array with the middle element
  * If array length is even and greater than 2: returns an array with both middle elements
* `flatten(array)`: flattens a given array into a single array
* `map(array, callback)`: calls a given callback function on every element of a given array
* `countLetters(string)`: returns an object with each character from a given string as the key, and its number of occurances as the key-value
* `countOnly(allItems, itemsToCount)`: given an object itemsToCount with keys of what to count and a value of true/false, returns an object with number of occurances of each key from a given array of allItems
* `findKey(object, callback)`: returns the key-name of the first truthy return of the callback function on a given object
* `findKeyByValue(object, value)`: returns the key-name of the first key-value matching the given value
* `takeUntil(array, callback)`: returns an array with all elements of a given array until it reaches a truthy return value from the given callback function
* `without(allItems, elementsToRemove)`: removes all instances of elements from a given array elementsToRemove from a main given array allItems
* `lettPositions(string)`: returns an object with keys of all characters and their indices as key-values from a given string