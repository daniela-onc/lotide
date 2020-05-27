const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  }
};

const tail = function (array) {
  return !array ? [] : array.slice(1, array.length);
};

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);