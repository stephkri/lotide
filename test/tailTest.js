const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return 0 for tail([]).length", () => {
    assert.equal(tail([]).length, 0);
  });
  it("should return 0 for tail([12]).length", () => {
    assert.equal(tail([12]).length, 0);
  });
  it("should return [2, 3, 4] for tail([1, 2, 3, 4])", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
});