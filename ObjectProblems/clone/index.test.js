const clone = require("./index.js");

describe("clone", () => {
  it("should return an object", () => {
    let testObj = { a: 1, b: 2 };

    let cloneObj = clone(testObj);
    expect(typeof cloneObj).toBe("object");
  });
  it("should return a new object with the same key/value pairs as the original", () => {
    let testObj2 = { z: 5, y: 10, x: 15 };

    let cloneObj2 = clone(testObj2);
    expect(cloneObj2.z).toEqual(testObj2.z);
    expect(cloneObj2.y).toEqual(testObj2.y);
    expect(cloneObj2.x).toEqual(testObj2.x);
  });
});
