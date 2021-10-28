const eqArrays = (arr1, arr2) => {
  let assert = false;
  if (arr1.length === 0 && arr2.length === 0) return true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i])
        assert = true;
      else
        assert = false;
    }
  }
  return assert;
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
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(
    eqObjects(actual, expected) ?
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` :
      `⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  );
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const obj1 = { obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] };
const obj2 = { d: ["2", 3, 4], obj: { birthday: 'Dec 18', name: 'Adam' } };
assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(cd, cd2); // => false
assertObjectsEqual(obj1, obj2); // => true
assertObjectsEqual(obj1, dc); // => false