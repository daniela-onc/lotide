const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === {expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== {expected}`);
  }
};

console.assert(assertEqual("Lighthouse Labs", "Bootcamp")); //failed
console.assert(assertEqual(1, 1)); //pass


//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed. function report back #of instancres of each stringfound in allItems array of string

<<<<<<< HEAD
const countOnly = function(allItems, itemsToCount) { //declare the function countOnly. allItems: array of string taht we need to look through.  itemsToCount: object specifying what we count
=======
const countOnly = function(allItems, itemsToCount) { //declare the function countOnly
>>>>>>> d808733677f88e50c41c72bfe8dc24fa12d9813e
  const results = {};  //new empty object named result

  for (const item of allItems) { //for..of loop to scan the entire list of names
    console.log(item);     //print the result of for..of loop to the console
    if (itemsToCount[item]) { //if condition to only increment our count in object results IF the item is found in the itemsToCount object
      if (results[item]) {
        results[item] += 1; //increment the counter for each item      result[item]) = result[item] + 1
      } else {
        results[item] = 1;
      }
    }
    return results; //return object named result
  }

};
const firstNames = [ //initial test code
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
