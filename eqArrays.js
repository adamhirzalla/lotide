// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(
    actual === expected ?
      `✅ Assertion Passed: ${actual} === ${expected}` :
      `⛔ Assertion Failed: ${actual} !== ${expected}`
  );
};
const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};
// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS