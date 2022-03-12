const assertEqual = require("./assertEqual");

/*
item is an element in the array allItems
if there is a key in itemsToCoun
*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) { // item is an element in the array allItems
    console.log(item);
    if (itemsToCount[item]) { // if there is a key in itemsToCount with the same name as the selected element in allItems
      /*
      Keeping the old if-style for explanation:
      if (results[item]) { // if there has already been (in a previous iteration of the loop) a key-value pair added to the results object
        results[item] += 1; // increase the value of the key in the results object by 1
      } else {
        results[item] = 1; // make a new key-value pair in the results object, with the key as the name of the item and the value as 1
      }
      */
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;

// allItems
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// itemsToCount is the second object
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
