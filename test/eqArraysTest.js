const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

describe("#eqArrays", () => {
  it("returns true where comparing array [1, 2, 3] with [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false where comparing array [1, 2, 3], [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("returns true where comparing array ['1', '2', '3'] with ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("returns false where comparing array ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it("returns true where comparing array [[2, 3], [4]] with [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("returns false where comparing array [[2, 3], [4]] with [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
  it("returns false where comparing array [[2, 3], [4]] with [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});
