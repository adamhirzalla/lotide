const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, "2", "3"], [1, 2, "3"]), ["2"]);
assertArraysEqual(without([1, "2", "3", 5, 6, 1, 2], ["1", 2, "3"]), [1, "2", 5, 6, 1]);