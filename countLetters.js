const countLetters = function(string) {
  const isLetter = function(c) {
    return c.toLowerCase() !== c.toUpperCase();
  };
  const results = {};
  for (const letter of string) {
    if (isLetter(letter)) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

//console.log(countLetters("Lighthouse Labs lol"));