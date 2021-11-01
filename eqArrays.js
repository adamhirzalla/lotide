const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (Array.isArray(firstArray[i]) && Array.isArray(secondArray[i])) {
      if (!eqArrays(firstArray[i], secondArray[i])) return false;
    } else if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

module.exports = eqArrays;