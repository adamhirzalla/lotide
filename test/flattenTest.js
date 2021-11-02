const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');
const { assert } = require('chai');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 3, 3, 4, 2, 4, 5, 6] for [1, [3, [3, 4]], [[2, 4], 5, [6]]]", () => {
    assert.deepEqual(flatten([1, [3, [3, 4]], [[2, 4], 5, [6]]]), [1, 3, 3, 4, 2, 4, 5, 6]);
  });
});