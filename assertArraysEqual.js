// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    //console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
  //console.assert(actual ===  expected, actual + " !== " + expected);
};

const assertArraysEqual = function(arr1, arr2) {
  let passOrFail = (arr1.length === arr2.length ? true : false);

  for (let i = 0; i < arr1.length; i++) {
    passOrFail = (arr1[i] === arr2[i]);
    if (!passOrFail) {
      break;
    }
    //console.log(passOrFail, arr1[i], arr2[i]);
  }
  if (passOrFail) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
    //return true;
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    //return false;
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false