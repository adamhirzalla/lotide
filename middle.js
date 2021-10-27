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
const getMiddle = (array) => {
  const middleArray = [];
  const middle = Math.floor(array.length / 2);
  if (array.length <= 2)
    return middleArray;
  else if (array.length % 2 === 0)
    middleArray.push(array[middle - 1], array[middle]);
  else if (array.length % 2 !== 0)
    middleArray.push(array[middle]);
  return middleArray;
};

assertArraysEqual(getMiddle([1, 2]), []);
assertArraysEqual(getMiddle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(getMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);