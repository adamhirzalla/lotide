const assertArraysEqual = require('../assertArraysEqual');
const getMiddle = require('../middle');

assertArraysEqual(getMiddle([1, 2]), []);
assertArraysEqual(getMiddle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(getMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);