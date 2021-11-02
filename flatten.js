const flatten = function(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  arr = newArr.slice();
  //console.log(arr);
  return arr;
};

module.exports = flatten;
