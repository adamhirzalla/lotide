const assertEqual = (actual, expected) => {
  console.log(
    actual === expected ?
      `✅ Assertion Passed: ${actual} === ${expected}` :
      `⛔ Assertion Failed: ${actual} !== ${expected}`
  );
};
const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};
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

// Test cases
assertEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
assertEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
assertEqual(eqObjects({ obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] }, { d: ["2", 3, 4], obj: { birthday: 'Dec 18', name: 'Adam' } }), true);
assertEqual(eqObjects({ obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] }, { c: "1", d: ["2", 3] }), false);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
