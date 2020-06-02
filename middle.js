
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');



/*
const assertArraysEqual = function(arrey1, arrey2) {
  if (!eqArrays(arrey1, arrey2)) { //or if arraey1 !== array2
    console.log(`🛑🛑🛑 Assertion Failed: [${arrey1}] !== [${arrey2}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${arrey1}] === [${arrey2}]`);
  }
};

const eqArrays = function (arrey1, arrey2) {
  if (arrey1.length !== arrey2.length) return false;
  for (let i = 0; i < arrey1.length; i += 1) {
    if (arrei1[i] !== arrey2[i]) {
      return false;
    }
  }
  return true;
};
*/



function findMiddle (numArr) {
  var middle = Math.floor(numArr.length / 2);

  if(numArr.length % 2 === 0) {
    console.log('middle numbs when array length is even: ' + numArr[middle -1] + ' ' + numArr[middle]);
  } else {
    console.log('middle num when array length is odd: ' + numArr[middle]);
  }
  return numArr;
}

//findMiddle();
//var numArr = [1, 2, 3, 4, 5, 6, 7, 8]
//var middle = Math.floor(numArr.length / 2);

module.exports = findMiddle;