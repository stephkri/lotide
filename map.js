const assertArraysEqual = require("./assertArraysEqual");

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/*
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results4 = map(words, word => word.concat("a"));
assertArraysEqual(results4, ["grounda", "controla", "toa", "majora", "toma"]);
*/