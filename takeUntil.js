const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let el of array) {
    if (callback(el)) {
      return newArray;
    }
    newArray.push(el);
  }
  return "None of the elements in the array met the requirements of the callback function.";
};

module.exports = takeUntil;

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 3, 4, 5, 6];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
*/