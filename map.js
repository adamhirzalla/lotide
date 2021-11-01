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
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(words, word => word + '!');
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArraysEqual(results3, ["ground!", "control!", "to!", "major!", "tom!"]);