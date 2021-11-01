const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("does not modify the original array", () => {
    const array = ["Yo Yo", "Lighthouse", "Labs"];
    tail(array);
    assert.strictEqual(array.length, 3);
  });
  it("returns back the correct array length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs'][0]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
  });
});