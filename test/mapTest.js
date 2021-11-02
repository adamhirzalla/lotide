const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');
const { assert } = require('chai');

describe("#map", () => {
  it(`returns ['g', 'c', 't', 'm', 't'] for ["ground", "control", "to", "major", "tom"]`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word[0]);
    assert.deepEqual(results, ['g', 'c', 't', 'm', 't']);
  });
  it(`returns ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"] for ["ground", "control", "to", "major", "tom"]`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word.toUpperCase());
    assert.deepEqual(results, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });
  it(`returns ["ground!", "control!", "to!", "major!", "tom!"] for ["ground", "control", "to", "major", "tom"]`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word + '!');
    assert.deepEqual(results, ["ground!", "control!", "to!", "major!", "tom!"]);
  });
});