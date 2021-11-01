const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

// TEST CODE
let t1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
let t2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false
console.log(`t1: ${t1} t2: ${t2}`);

let t3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
let t4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
console.log(`t3: ${t3} t4: ${t4}`);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

let a = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
let b = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
let c = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
console.log(`a: ${a} b: ${b} c: ${c}`);