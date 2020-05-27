
const eqArrays = function (arrey1, arrey2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arrey1.length; i += 1) {
    if (arrey1[i] !== arrey2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrey1, arrey2) {
  if (!eqArrays(arrey1, arrey2)) {
    console.log(`Assertion Failed: [${arrey1}] === [${arrey2}]`);
  } else {
    console.log(`Assertion Passed: [${arrey1}] === [${arrey2}]`);
  }
};