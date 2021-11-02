const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');
const { assert } = require('chai');

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2]", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = takeUntil(data, x => x < 0);
    assert.deepEqual(results, [1, 2, 5, 7, 2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood']", () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results = takeUntil(data, x => x === ',');
    assert.deepEqual(results, ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});