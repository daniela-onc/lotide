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


//CODE HERE
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
if (sentence[i] !== " ") {
  if (results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
}
  return results;
};

const result = letterPositions("hello world");
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['l'], [2,3,9]);