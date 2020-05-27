const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  }
};

const eqArrays = function (arrey1, arrey2) {
  if (arrey1.length !== arrey2.length) return false;
  for (let i = 0; i < arrey1.length; i += 1) {
    if (arrei1[i] !== arrey2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);