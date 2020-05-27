const assertEqual = function(actual, expected) {
  return (actual + expected);
};

// TEST CODE
console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));


function countLetters (string) {
  var noSpace = string.split(' ').join(''); //remove space of string
  var object = {};

  for (var i = 0; i < noSpace.length; i++) {
    if (object[noSpace[i]] === undefined) {
      object[noSpace[i]] = 1;
    } else {
      object[noSpace[i]] += 1

    }
    }
return object; //return a count of each letter(spaces not counted) of the function sentence
}

console.log(countLetters('lighthouse in the house'));
