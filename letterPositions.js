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
const assertArraysEqual = function (arrey1, arrey2) {
  if (!eqArrays(arrey1, arrey2)) {
    console.log(`Assertion Failed: [${arrey1}] === [${arrey2}]`);
  } else {
    console.log(`Assertion Passed: [${arrey1}] === [${arrey2}]`);
  }
};


//CODE HERE
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
if (sentence[i] !== " ") {
  if (results[sentence[i]]) {
    results[sentence[i]].push(i);
     } else {
      results[sentence[i]] = [i];
    }
  }
}
  return results;

};

const result = letterPositions("hello world");
assertArraysEqual(result['h'], [0]); //pass
assertArraysEqual(result['l'], [2,3,9]); //pass
assertArraysEqual(result['e'], [8,9,10]); //fail
