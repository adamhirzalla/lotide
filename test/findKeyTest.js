const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');
assertEqual(findKey({
  "Blue Hill": { value: 1 },
  "Akaleri":   { value: 3 },
  "noma":      { value: 2 },
  "elBulli":   { value: 3 },
  "Ora":       { value: 2 },
  "Akelarre":  { value: 3 }
}, x => x.value === 3),'Akaleri');