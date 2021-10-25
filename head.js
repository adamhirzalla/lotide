// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(
    actual === expected ?
      `✅ Assertion Passed: ${actual} === ${expected}` :
      `⛔ Assertion Failed: ${actual} !== ${expected}`
  );
};
const head = function(array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
