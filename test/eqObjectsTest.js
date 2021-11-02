const assert = require('chai').assert;
const eqObjects = require('../eqObjects.js');

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };

  it("returns true for input object ab and ba", () => {
    assert.isTrue(eqObjects(ab, ba));
  });
  it("returns false for input object ab and abc", () => {
    assert.isFalse(eqObjects(ab, abc));
  });

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it("returns true for input object cd and dc", () => {
    assert.isTrue(eqObjects(cd, dc));
  });
  it("returns false for input object cd and cd2", () => {
    assert.isFalse(eqObjects(cd, cd2));
  });

  it("returns true for input objects { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    let e = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.isTrue(e);
  });
  it("returns false for input objects { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    let f = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.isFalse(f);
  });
  it("returns false for input objects { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }", () => {
    let g = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
    assert.isFalse(g);
  });

});