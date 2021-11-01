const findKeyByValue = (object, string) => {
  for (const key in object) {
    if (object[key] === string) {
      return key;
    }
  }
};

module.exports = findKeyByValue;