const assertEqual = require("./assertEqual");

const tail = function(array) {
  if ((array.length === 1) || (array.length === 0)) {
    return [];
  }
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;