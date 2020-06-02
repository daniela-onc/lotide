

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //pass
assertEqual(eqArrays([1, 3], [1, 2, 3]), true); //  fail
assertEqual(eqArrays([1, 2, 5], [1, 2, 6]), true); //  fail
assertEqual(eqArrays([4, 3, 1], [1, 3, 4]), true); // => should fail