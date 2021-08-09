const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const isLetter = function(c) {
    return c.toLowerCase() !== c.toUpperCase();
  };
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (isLetter(sentence[i])) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
/*
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);


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