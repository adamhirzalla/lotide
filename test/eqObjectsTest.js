const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// Test cases
assertEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
assertEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
assertEqual(eqObjects({ obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] }, { d: ["2", 3, 4], obj: { birthday: 'Dec 18', name: 'Adam' } }), true);
assertEqual(eqObjects({ obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] }, { c: "1", d: ["2", 3] }), false);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false