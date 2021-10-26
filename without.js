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
    passOrFail = assertEqual(arr1[i], arr2[i]);
    if (!passOrFail) {
      break;
    }
    //console.log(passOrFail, arr1[i], arr2[i]);
  }
  if (passOrFail) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);

  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(arr1w, arr2w) {
  let newArr = arr1w.slice(); //need slice to copy
  for (let i = newArr.length-1; i >= 0; i--) {
    for(let j = 0; j < arr2w.length; j++){
      if (assertEqual(newArr[i], arr2w[j])) {
        newArr.splice(i, 1);
      }
    }
  }
  //console.log(newArr);
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

assertArraysEqual(words, ["hello", "world", "lighthouse"]);