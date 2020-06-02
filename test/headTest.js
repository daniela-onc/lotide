
//const assertEqual = require('../assertEqual');
//const head = require('../head');

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

//assertEqual(head([3]), 3); //pass
//assertEqual(head([]), 4); //failed
//assertEqual(head([5, 6, 7]), 5); //pass
//assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); //pass

