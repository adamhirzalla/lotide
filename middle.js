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

module.exports = getMiddle;