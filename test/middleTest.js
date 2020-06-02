
//const assertArraysEqual = require('../assertArraysEqual');
//const middle = require('../middle');


//assertArraysEqual(middle([1, 2, 3]), 2); 
//assertArraysEqual(middle([1, 2, 3, 4, 5]), 3); 
//assertArraysEqual(middle([1, 2, 3, 4, 5, 7, 8, 9]), 4, 5);
//assertArraysEqual(middle([1, 2, 3, 4, 5]), 2); 
//assertArraysEqual(middle([1, 2]), 3); 
//assertArraysEqual(middle([]), 0);

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
});

it("returns '5, 7' for ['1, 5, 7, 8']", () => {
  assert.strictEqual(middle(['5, 7']), '5, 7'); 
});
