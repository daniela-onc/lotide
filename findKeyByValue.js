const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === {expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== {expected}`);
  }
  
};
//Implement the function findKeyByValue which takes in an object and a value. 
//It should scan the object and return the first key which contains the given value. 
//If no key with that given value is found, then it should return undefined.

//code Here
const findKeyByValue = function(object, value) {
  for(let element in object ) {
    if (object[element] === value) {
      return element;
    }
  }
  return undefined;
}
//code up

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined) //undefined