// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let size1 = Object.keys(object1).length;
  let size2 = Object.keys(object2).length;
  let pass = true;

  //check if length is the same
  if (size1 !== size2) pass = false;

  //use for to compare all values
  for (let item in object1) {
    if (Array.isArray(object1[item])) { //check if array
      if (object1[item].length !== object2[item].length) pass = false;
      for (let i = 0; i < object1[item].length; i++) {
        if (object1[item][i] !== object2[item][i]) {
          pass = false;
        }
      }

    } else if (typeof object1[item] === "object") { //check if object
      pass = eqObjects(object1[item], object2[item]);
    } else if (object1[item] !== object2[item]) { //compare if not same
      pass = false;
    }
  }
  

  //return true or false for the results
  if (!pass) {
    return false;
  } else {
    return true;
  }

};

module.exports = eqObjects;
