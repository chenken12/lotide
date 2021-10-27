const assertArraysEqual = function(arr1, arr2) {
  //check if is the same length
  let passOrFail = (arr1.length === arr2.length ? true : false);

  //check the index of both array
  for (let i = 0; i < arr1.length; i++) {
    passOrFail = (arr1[i] === arr2[i]);
    if (!passOrFail) {
      break;
    }
  }
  //print statment
  if (passOrFail) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
    //return true;
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    //return false;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  //console.log(results);
  return results;
};

letterPositions("compass");
assertArraysEqual(letterPositions("hello").e, [1]);