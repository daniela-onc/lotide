const eqArrays = function(arrey1, arrey2) {
  if (arrey1.length !== arrey2.length) {
    return false;
  } else {
    for (let i = 0; i < arrey1.length; i ++) {
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
assertArraysEqual([1, 2, 3], [1, 2, 3]); //  PASS
assertArraysEqual([1, 2], [1, 2, 3]); //  fail
assertArraysEqual([1, 2, 4], [1, 2, 3]); // fail
assertArraysEqual([3, 2, 1], [1, 2, 3]); // fail


const words = ["ground", "control", "to", "major", "tom"];


//define map function. will have ywo args: an array & a callback function. Map funct will return a NEW array based on the callback funct result
const map = function(array, callback) {
  const results = []; //result  NEW array

  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    //}
    //return results;
    //}
    results.push(callback(item));
  }
  return results; //return the NEW array

};
//test 1
const results1 = map(words, word => word[0]); //array with just the first letter g, c, t, m, t
console.log(results1);

//test 2
const printWords = words.filter(word => word[2]); //full words into array ground, control, major, tom
console.log(printWords);

//test 3
const results2 = map(words, word => word.length); //array of array item length numbers 6, 7, 2, 5, 3
console.log(results2);

//test 4
const results3 = map(words, word => word[0] + ' Hello'); //array of first letter of each item with Hello added on g Hello, c Hello, t Hello, m Hello, t Hello
console.log(results3);
