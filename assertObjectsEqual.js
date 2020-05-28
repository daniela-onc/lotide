//=========================Copy your eqObjects function into this new file.
const eqObjects = function(object1, object2) {
    // Returns true if both objects are identical(identical keys & values)
    //Othervise return false

    // 1. Testing number of keys
const keys1 = Object.keys(object1); //keys of object1
const keys2 = Object.keys(object2); //keys of object2
   if (keys1.length !== keys2.length) {
     return false;
   }

// 2. Testing if both objects have the same keys name
  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    }
 };

   // 3. Testing values of keys in each objects, if each key on each object has the same value
   for (let key of keys1) {
      const value1 = object1[key];
      const value2 = object2[key];
        if (Array.isArray(value1) && Array.isArray(value2)) {
      // check if both val1 and val 2 are arrays
      if (!eqArrays(value1,value2)) {
        return false;
      }
   
      } else  {
      // both values are of primitive type
      if (value1 !== value2) {
        return false;
      }
      
    }
  }

  return true;
  
};
//Code up of eqObjects.js



//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; //use INSPECT function
  if (eqObjects(actual, expected)) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `⛔️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 1}, {a: 1, b: 1}); //Expected to pass
assertObjectsEqual({a: 1, b: 1}, {a: 1, b: 2}); //Expected to fail


//The message printed to the console should be similar to that of assertArraysEqual
//Not use assertion for Function with NO return (just print out console.log messages)
//Should call the function and confirm that the message printed into console is accurate