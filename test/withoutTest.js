const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');
const { assert } = require('chai');

describe("#without", () => {
  it(`returns [2, 3]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`returns ["1", "2"]`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it(`returns ["2"]`, () => {
    assert.deepEqual(without([1, "2", "3"], [1, 2, "3"]), ["2"]);
  });
  it(`returns [1, "2", 5, 6, 1]`, () => {
    assert.deepEqual(without([1, "2", "3", 5, 6, 1, 2], ["1", 2, "3"]), [1, "2", 5, 6, 1]);
  });
});