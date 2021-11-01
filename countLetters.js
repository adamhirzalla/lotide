const countLetters = (str) => {
  str = str.split(' ').join('');
  const countObj = {};
  for (const char of str) {
    if (countObj[char])
      countObj[char] += 1;
    else
      countObj[char] = 1;
  }
  return countObj;
};

module.exports = countLetters;