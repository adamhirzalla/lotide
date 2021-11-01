const assertEqual = (actual, expected) => {
  console.log(
    actual === expected ?
      `✅ Assertion Passed: ${actual} === ${expected}` :
      `⛔ Assertion Failed: ${actual} !== ${expected}`
  );
};
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

const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
assertEqual(result["e"], 3);
assertEqual(result["z"], undefined);