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