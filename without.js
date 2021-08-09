const assertArraysEqual = require("./assertArraysEqual");

/* OF: only one works
const without = function(array, values) {
  let newArray = [];
  for (item of array) {
    for (value of values) {
      if (item !== value) {
        newArray.push(item);
      }
    }
  }
  return newArray;
}
*/

const without = function(array, vals) {
  let newArray = [];
  for (item of array) {
    let matches = false;
    for (val of vals) {
      if (val === item) {
        matches = true;
      }
    }
    if (!matches) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = without;

/*
const words = ["hello", "world", "lighthouse"];
const newArr = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(newArr);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/