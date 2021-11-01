const middle = function(arr) {
  const spot = arr.length / 2;
  //console.log(spot);
  if (spot <= 1) {
    return [];
  } else if (spot % 1 === 0) {
    return [arr[spot - 1], arr[spot]];
  } else {
    return [arr[spot - 0.5]];
  }
};

module.exports = middle;
