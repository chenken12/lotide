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
    //console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  } else {
    //console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
let a = eqObjects(ab, ba); // => true
console.log(a);

const abc = { a: "1", b: "2", c: "3" };
let b = eqObjects(ab, abc); // => false
console.log(b);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let c = eqObjects(cd, dc); // => true
console.log(c);

const cd2 = { c: "1", d: ["2", 3, 4] };
let d = eqObjects(cd, cd2); // => false
console.log(d);

let e = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
console.log(e);

let f = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
let g = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
console.log(f);
console.log(g);