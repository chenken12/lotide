const assert = require('chai').assert;

const tail = require('../tail.js');

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs'] when use tail in it", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' for first element", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
  });

  it("returns 'Labs' for second element", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
  });

  it("returns ['Lighthouse', 'Labs'] for result", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns 3 for the length of word", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });

});
