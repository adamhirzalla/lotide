const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');
const { assert } = require('chai');

describe("#letterPositions", () => {
  it("returns [0] for result['h']", () => {
    const result = letterPositions('hello');
    assert.deepEqual(result['h'], [0]);
  });
  it("returns [1] for result['e']", () => {
    const result = letterPositions('hello');
    assert.deepEqual(result['e'], [1]);
  });
  it("returns [2, 3] for result['l']", () => {
    const result = letterPositions('hello');
    assert.deepEqual(result['l'], [2, 3]);
  });
  it("returns [4] for result['o']", () => {
    const result = letterPositions('hello');
    assert.deepEqual(result['o'], [4]);
  });
});