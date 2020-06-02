

const assertEqual = require('./assertEqual');


//remove the function definition for assertEqual from this file . Function definition const assertEqual = function(...) {...}
//const assertEqual = function(actual, expected) {
  //if (actual === expected) {
    //console.log(`✅✅✅ Assertion Passed: ${actual} === {expected}`);
  //} else {
   // console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== {expected}`);
 // }
  //};


//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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


module.exports = eqArrays;
