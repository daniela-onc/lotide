const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === {expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== {expected}`);
  }
};

console.assert(assertEqual("Lighthouse Labs", "Bootcamp")); //failed
console.assert(assertEqual(1, 1)); //pass

//The function countLetter take in a sentence (as a string). Return a count of each of the letters in that sentence. Result return is an object (leters - count of # displayed)
const countLetters = function(string) {
  let result = {}; //the return result is an object
  let noSpace = string.split(' ').join(''); //remove space of string

  for (let i = 0; i < noSpace.length; i++) {
    if (result[noSpace[i]] === undefined) {
      result[noSpace[i]] = 1;
    } else {
      result[noSpace[i]] += 1;

    }
  }
  return result; //return a count of each letter(spaces are not counted) of the function sentence
};
    

console.log(countLetters('lighthouse in the house'));
