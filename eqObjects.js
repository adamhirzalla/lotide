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

// Test cases
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const obj1 = { obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] };
const obj2 = { d: ["2", 3, 4], obj: { birthday: 'Dec 18', name: 'Adam' } };
assertEqual(eqObjects(cd, dc), true);
assertEqual.log(eqObjects(cd, cd2), false);
assertEqual.log(eqObjects(obj1, obj2), true);
assertEqual.log(eqObjects(obj1, cd), false);
