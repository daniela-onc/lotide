const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
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


var numArr = [1, 2, 3, 4, 5, 6, 7, 8]
var middle = Math.floor(numArr.length / 2);

function findMiddle () {
  if(numArr.length % 2 === 0) {
    console.log('middle numbs when array length is even: ' + numArr[middle -1] + ' ' + numArr[middle]);
  } else {
    console.log('middle num when array length is odd: ' + numArr[middle]);
  }
}

findMiddle();