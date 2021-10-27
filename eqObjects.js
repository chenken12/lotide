const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  //console.assert(actual ===  expected, actual + " !== " + expected);
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  var size1 = Object.keys(object1).length;
  var size2 = Object.keys(object2).length;
  if (size1 !== size2) {
    console.log(`🛑🛑🛑 Assertion Failed: ${size1} !== ${size2}`);
    return false;
  }
  for (let item in object1) {
    //Array.isArray(value)
    if (Array.isArray(object1[item])) {
      if (object1[item].length !== object2[item].length) {
        //console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
        return false;
      }
      for (let i = 0; i < object1[item].length; i++) {
        if (object1[item][i] !== object2[item][i]) {
          //console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
          return false;
        }
      }
    } else if (object1[item] !== object2[item]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${object1} !== ${object2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${object1} === ${object2}`);
  return true;

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
