const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
assertEqual(result["e"], 3);
assertEqual(result["z"], undefined);