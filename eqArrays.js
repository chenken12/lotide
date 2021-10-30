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

const eqArrays = function(arr1, arr2) {
  let passOrFail = (arr1.length === arr2.length ? true : false);

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      passOrFail = eqArrays(arr1[i], arr2[i]);
    } else if (!assertEqual(arr1[i], arr2[i])){
      passOrFail = false;
    }
  }

  if (passOrFail) {
    //console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
    return true;
  } else {
    //console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  
};

// TEST CODE
let t1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
let t2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false
console.log(`t1: ${t1} t2: ${t2}`);

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

let a = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
let b = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
let c = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
console.log(`a: ${a} b: ${b} c: ${c}`);