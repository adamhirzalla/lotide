const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  const [keys1, keys2] = [Object.keys(object1), Object.keys(object2)];
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] instanceof Object && object2[key] instanceof Object) {
      if (!eqObjects(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

module.exports = eqObjects;