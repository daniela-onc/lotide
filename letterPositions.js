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
    if (arrey1[i] !== arrey2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);









//CODE HERE
const letterPositions = function(sentence) {
  const results = {};
  
  for (let letter of sentence) { //for each letter in the results object
    result[letter] = []; //create an array
     
    for (let i = 0; i < sentence.length; i++) {
      if (letter === sentence[i]) {
        results[letter].push[i]; //push new numbers into array
      }
    }
  }
 
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);