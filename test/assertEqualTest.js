
//const assertEqual = require('../assertEqual');
//test code from assertEqaul.js file

//console.assert(assertEqual("Lighthouse Labs", "Bootcamp")); //failed
//console.assert(assertEqual(1, 1)); //pass


const assert = require('chai').assert;
const assertEqual  = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '6' for ['5']", () => {
  assert.strictEqual(assertEqual(['5']), '6'); 
});