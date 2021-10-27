const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  //console.assert(actual ===  expected, actual + " !== " + expected);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let size1 = Object.keys(actual).length;
  let size2 = Object.keys(expected).length;
  let pass = true;

  if (size1 !== size2) {
    pass = false;
  }
  for (let item in actual) {
    if (Array.isArray(actual[item])) {
      if (actual[item].length !== expected[item].length) {
        pass = false;
      }
      for (let i = 0; i < actual[item].length; i++) {
        if (actual[item][i] !== expected[item][i]) {
          pass = false;
        }
      }
    } else if (actual[item] !== expected[item]) {
      pass = false;
    }
  }
  //print the results
  //console.log(`Example label: ${inspect(actual)}`);
  if (!pass) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    //return false;
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    //return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
