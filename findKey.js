const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === {expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== {expected}`);
  }
  
};

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  let result = {}; //result is an object
  for (let [key, value] of Object.entries(object)) { //object entries() meth: return an array based on enumerable property [key, value] pairs of Object which are passed as the param

    //console.log(`{key}: ${value}`);
    if (callback(value) === true) {
      result = key;
      break;
    } else {
      result = undefined;
    }
  }
  console.log(result);

};
    
 
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // display "noma"

console.assert(assertEqual("Lighthouse Labs", "Bootcamp")); //failed
console.assert(assertEqual(1, 1)); //pass