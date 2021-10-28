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

//const map = (words, r0) => {return words.map(r0)};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
