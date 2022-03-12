const assertArraysEqual = require("./assertArraysEqual");

const isLetter = function(c) {
  return c.toLowerCase() !== c.toUpperCase();
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (isLetter(char)) {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [];
        results[char].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
/*
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
*/
/*
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/