const assert = require('chai').assert;
const letterPositions = require('../letterPositions.js');

const compare = {
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
};

describe("#letterPositions", () => {
  it("returns letter indexs for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), compare);
  });

  it("returns e index which is [1] in the string 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

});
