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

const middle = function(arr) {
  const spot = arr.length / 2;
  //console.log(spot);
  if (spot <= 1) {
    return [];
  } else if (spot % 1 === 0) {
    return [arr[spot - 1], arr[spot]];
  } else {
    return [arr[spot - 0.5]];
  }
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
