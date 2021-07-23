const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);