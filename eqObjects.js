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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === {expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== {expected}`);
  }
  
};
//function eqObjects take in two objects and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {
  // Returns true if both objects are identical(identical keys & values)  Othervise return false
  
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
  }

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
    
 
//test cases
// - testing array values
const ac = { a: "3", c: ["1", 2] };
const ca = { c: ["1", 2], a: "3" };
assertEqual(eqObjects(ac, ca),true); // => true

const dx = { d: ["6", 3], x: "10" };
assertEqual(eqObjects(ac, dx),false); // => false

// - test primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2" , a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abcd = { a: "11", b: "12", c: "13", d: "14" };
assertEqual(eqObjects(abcd, ab),false); // => false