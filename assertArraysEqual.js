
const eqArrays = function (arrey1, arrey2) {
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

const assertArraysEqual = function (arrey1, arrey2) {
  if (!eqArrays(arrey1, arrey2)) {
    console.log(`Assertion Failed: [${arrey1}] === [${arrey2}]`);
  } else {
    console.log(`Assertion Passed: [${arrey1}] === [${arrey2}]`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]); //  PASS
assertArraysEqual([1, 2], [1, 2, 3]); //  fail
assertArraysEqual([1, 2, 4], [1, 2, 3]); // fail
assertArraysEqual([3, 2, 1], [1, 2, 3]); // fail