const _ = require("../index");
const assert = require("chai").assert;

describe("Dashed functions", () => {
  it("should return 1 for _.head([1, 2, 3])", () => {
    assert.equal(_.head([1, 2, 3]), 1);
  });
  it("should return [2, 3] for _.tail([1, 2, 3])", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });
  it("should return [2, 3] for _.middle([1, 2, 3, 4])", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });
});