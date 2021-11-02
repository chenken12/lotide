const findKeyByValue = function(list, val) {
  for (const item in list) {
    //console.log(list[item]);
    if (list[item] === val) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
