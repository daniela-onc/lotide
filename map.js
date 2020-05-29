const eqArrays = function (arrey1, arrey2) {
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

const assertArraysEqual = function (arrey1, arrey2) {
  if (!eqArrays(arrey1, arrey2)) {
    console.log(`Assertion Failed: [${arrey1}] === [${arrey2}]`);
  } else {
    console.log(`Assertion Passed: [${arrey1}] === [${arrey2}]`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];


//define map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}
const results1 = map(words, word => word[0]); //array with just the first letter
console.log(results1);


const printWords = words.filter(word => word[2]); //full words into array
console.log(printWords);

const results2 = map(words, word => word.length); //array of array item length numbers
console.log(results2);

const results3 = map(words, word => word[0] + ' Hello'); //array of first letter of each item with Hello added on 
console.log(results3);
