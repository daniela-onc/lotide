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


//function takeUtil with two param: array and callback
//will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
//implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
    //code HERE ...
    let someArray =[];
    for (item of array) {
      if(callback(item) == false) {
        someArray.push(item);
      } else {
        break;
      }
    }
    return someArray;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //return the slice [1,2,5,7,2]
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(results1, [1, 2, 5, 7, 2]); //pass
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



