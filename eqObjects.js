const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

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

const eqObjects = function(obj1, obj2) {
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }
  for (const key of keyArr1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

/* TAKE 1
const eqObjects = function(object1, object2) {
  let count1 = 0
  let count2 = 0;
  let sameLength = false;
  for (key1 in object1) {
    count1 += 1;
  }
  for (key2 in object2) {
    count2 += 1;
  }
  if (count1 === count2) {
    sameLength = true;
  }
  let sameValues = true;
  if (sameLength) {
    for (key1 in object1) {
      if (findKeyByValue(object2, object1[key1]) === undefined) {
        sameValues = false;
      }
    }
  }
  if (sameLength) {
    return sameValues;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false