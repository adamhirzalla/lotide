const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');
const { assert } = require('chai');

describe("#eqObjects", () => {
  it(`returns true for { c: "1", d: ["2", 3] } vs { d: ["2", 3], c: "1" }`, () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it(`returns false for { c: "1", d: ["2", 3] } vs { c: "1", d: ["2", 3, 4] }`, () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });
  it(`returns true for { obj: { name: 'Adam', birthday: 'Dec 18' } } vs { obj: { birthday: 'Dec 18', name: 'Adam' } }`, () => {
    assert.strictEqual(eqObjects({ obj: { name: 'Adam', birthday: 'Dec 18' } }, { obj: { birthday: 'Dec 18', name: 'Adam' } }), true);
  });
  it(`returns false for { obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] } vs { c: "1", d: ["2", 3] }`, () => {
    assert.strictEqual(eqObjects({ obj: { name: 'Adam', birthday: 'Dec 18' }, d: ["2", 3, 4] }, { c: "1", d: ["2", 3] }), false);
  });
  it(`returns true for { a: { z: 1 }, b: 2 } vs { a: { z: 1 }, b: 2 }`, () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it(`returns false for { a: { y: 0, z: 1 }, b: 2 } vs { a: { z: 1 }, b: 2 }`, () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it(`returns false for { a: { y: 0, z: 1 }, b: 2 } vs { a: 1, b: 2 }`, () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});