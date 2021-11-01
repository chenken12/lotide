const eqArrays = function(arr1, arr2) {
  let passOrFail = (arr1.length === arr2.length ? true : false);

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      passOrFail = eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]){
      passOrFail = false;
    }
  }

  if (passOrFail) {
    return true;
  } else {
    return false;
  }
  
};

module.exports = eqArrays;
