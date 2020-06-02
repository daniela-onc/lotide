


const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]); //  PASS
assertArraysEqual([1, 2], [1, 2, 3]); //  fail
assertArraysEqual([1, 2, 4], [1, 2, 3]); // fail
assertArraysEqual([3, 2, 1], [1, 2, 3]); // fail

