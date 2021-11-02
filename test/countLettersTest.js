const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');
const { assert } = require('chai');

describe("#countLetters", () => {
  it("returns 1 for result['l']", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result["l"], 1);
  });
  it("returns 4 for result['h']", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result["h"], 4);
  });
  it("returns 3 for result['e']", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result["e"], 3);
  });
  it("returns undefined for result['z']", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result["z"], undefined);
  });
});