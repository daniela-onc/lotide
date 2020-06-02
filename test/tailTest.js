
//const assertEqual = require('../assertEqual');
//const head = require('../tail');

//const words = ['Hi', 'Lighthouse', 'Labs'];
//assertEqual(words.length, 3);


const assert = require('chai').assert;
const head   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
});

it("returns '5' for ['1, 2, 5']", () => {
  assert.strictEqual(tail(['5']), '5'); 
});
