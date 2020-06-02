const assert = require('./assertEqual');



//remove the function definition for assertEqual from this file. Function def is const assertEqual = function(...) {...}
//const assertEqual = function (actual, expected) {
  //if (actual !== expected) {
    //console.log(`Assertion Failed: [${actual}] === [${expected}]`);
  //} else {
  //  console.log(`Assertion Passed: [${actual}] === [${expected}]`);
 // }
//};

const head = function(arr) {
  return arr[0];
};

//create the headTest.js file and move the test code from the bottom to the new file
//assertEqual(head([3]), 3);
//assertEqual(head([]), 4);
//assertEqual(head([5, 6, 7]), 5);
//assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');


//add the code to export the function from this module
module.exports = head;