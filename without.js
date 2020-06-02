const eqArrays = function (arrey1, arrey2) {
  if (arrey1.length !== arrey2.length) return false;
  for (let i = 0; i < arrey1.length; i += 1) {
    if (arrey1[i] !== arrey2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrey1, arrey2) {
  if (!eqArrays(arrey1, arrey2)) {
    console.log(`⛔️ Assertion Failed: [${arrey1}] !== [${arrey2}]`);
  } else {
    console.log(`✅ Assertion Passed: [${arrey1}] === [${arrey2}]`);
  }
};

//Implement without which will return a subset of a given array, removing unwanted elements.
const without = function (source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
};

const words = ['Hi', 'Lighthouse', 'Labs'];
without(words, ['Labs']); 

assertArraysEqual(words, ['Hi', 'Lighthouse', 'Labs']);