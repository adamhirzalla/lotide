const getMiddle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(getMiddle([1, 2]), []);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(getMiddle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(getMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});