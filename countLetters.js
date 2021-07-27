const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const isLetter = function(c) {
  return c.toLowerCase() !== c.toUpperCase();
};

const countLetters = function(string) {
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

console.log(countLetters("Lighthouse Labs lol"));