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

const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else{
      break;
    }
  }
  return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1 ,[1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
