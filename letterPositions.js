const eqArrays = function(arrey1, arrey2) {
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
const assertArraysEqual = function(arrey1, arrey2) {
  if (!eqArrays(arrey1, arrey2)) { //or if arraey1 !== array2
    console.log(`🛑🛑🛑 Assertion Failed: [${arrey1}] !== [${arrey2}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${arrey1}] === [${arrey2}]`);
  }
};

//function letterPosition return all the indices (zero-based positions) in the string where each character is found
//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
const letterPositions = function(sentence) { //define function letterPosition

  const result = {};  //result is an object
 
  for (let letter of sentence) {
    result[letter] = [];
    for (let i = 0; i < sentence.length; i++) {
      if (letter === sentence[i]) {
        result[letter].push(i);
      }
    }
  }
  return result; ////return result is an object

};

const result = letterPositions("hello");
assertArraysEqual(result['h'], [0]); //pass
assertArraysEqual(result['l'], [2,3,9]); //fail
assertArraysEqual(result['e'], [8,9,10]); //fail

<<<<<<< HEAD
assertArraysEqual(letterPositions("hello").e, [1]);
=======
assertArraysEqual(letterPositions("hello").e, [1]);
>>>>>>> d808733677f88e50c41c72bfe8dc24fa12d9813e
