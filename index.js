

//add code to export some of the functions as part of an object

/*
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle
};
*/

//declare object with the new ES6/ES2015 syntax
let head = "head";
let tail = "tail";
let middle = "middle";

let someObject = {
  head,
  tail,
  middle
}
console.log(someObject);