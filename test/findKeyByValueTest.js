const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue.js');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns 'drama' form input the value 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined form input the value 'That '70s Show'", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});
