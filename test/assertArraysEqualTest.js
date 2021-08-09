//const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");
/*
describe("#assertArraysEqual", () => {
  it("should pass the assertion for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual
  })
})
*/

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
