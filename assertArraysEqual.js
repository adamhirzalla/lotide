const eqArrays = require('./eqArrays');

const assertArraysEqual = (firstArray, secondArray) => {
  console.log(
    eqArrays(firstArray, secondArray) ?
      `✅ Array Assertion Passed` :
      `⛔ Array Assertion Failed`
  );
};

module.exports = assertArraysEqual;