const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};
const assertArraysEqual = (firstArray, secondArray) => {
  console.log(
    eqArrays(firstArray, secondArray) ?
      `✅ Array Assertion Passed` :
      `⛔ Array Assertion Failed`
  );
};
const flatten = (array) => {
  let flatArray = [];
  for (const arrayElement of array) {
    if (Array.isArray(arrayElement))
      flatArray = flatArray.concat(flatten(arrayElement)); // recursion
    else
      flatArray.push(arrayElement);
  }
  return flatArray;
};

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [3, [3, 4]], [[2, 4], 5, [6]]]), [1, 3, 3, 4, 2, 4, 5, 6]);