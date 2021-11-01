const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arr1, arr2) {
  const equal = eqArrays(arr1, arr2);

  if (equal) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;
