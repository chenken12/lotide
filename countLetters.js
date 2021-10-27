const countLetters = function(word) {
  const results = {};

  for (const letter of word) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  console.log(results);
  return results;
};

countLetters('LHL');
countLetters('countLetters');
countLetters('lighthouse in the house');