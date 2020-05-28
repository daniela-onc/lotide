
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === {expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== {expected}`);
  }
  
};

const eqArrays = function (arrey1, arrey2) {
  if (arrey1.length !== arrey2.length) { //if arrays are of different length, return false
    return false;
  } else {
  for (let i = 0; i < arrey1.length; i ++) { //return false if both arrays differ by an element
    if (arrey1[i] !== arrey2[i]) {
      return false;
    }
  }
  return true;
}
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //pass
assertEqual(eqArrays([1, 3], [1, 2, 3]), true); //  fail
assertEqual(eqArrays([1, 2, 5], [1, 2, 6]), true); //  fail
assertEqual(eqArrays([4, 3, 1], [1, 3, 4]), true); // => should fail