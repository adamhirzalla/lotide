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
const without = (source, itemsToRemove) => {
  const filtered = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element))
      filtered.push(element);
  }
  return filtered;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, "2", "3"], [1, 2, "3"]), ["2"]);
assertArraysEqual(without([1, "2", "3", 5, 6, 1, 2], ["1", 2, "3"]), [1, "2", 5, 6, 1]);