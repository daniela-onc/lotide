
const eqArrays = require('./eqArrays');





/*   const eqArrays = function (arrey1, arrey2) {
  if (arrey1.length !== arrey2.length) {
    return false;
  } else {
  for (let i = 0; i < arrey1.length; i ++) {
    if (arrey1[i] !== arrey2[i]) {
      return false;
    }
  }
  return true;
}
};
*/


//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) { //or if arraey1 !== array2
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  }
};


/*assertArraysEqual([1, 2, 3], [1, 2, 3]); //  PASS
assertArraysEqual([1, 2], [1, 2, 3]); //  fail
assertArraysEqual([1, 2, 4], [1, 2, 3]); // fail
assertArraysEqual([3, 2, 1], [1, 2, 3]); // fail
*/

module.exports = assertArraysEqual;