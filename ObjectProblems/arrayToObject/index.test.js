const arrayToObject = require("./index.js");

describe("arrayToObject", () => {
  it("should return an object where all even indexed elements from the original array are keys", () => {
    let testArr = ["keyOne", 11, "keyTwo", true];
    let resultObj = arrayToObject(testArr);

    let keys = Object.keys(resultObj);

    expect(keys.includes("keyOne")).toBe(true);
    expect(keys.includes("keyTwo")).toBe(true);
  });
  it("should return an object where all odd indexed elements from the original array are values", () => {
    let testArr = ["keyOne", 11, "keyTwo", true];
    let resultObj = arrayToObject(testArr);

    let values = Object.values(resultObj);

    expect(values.includes(11)).toBe(true);
    expect(values.includes(true)).toBe(true);
  });
  it("should return an object with the correct key/value pairs", () => {
    let testArr2 = ["one", 5, "two", "hello", "three", []];

    let obj2 = arrayToObject(testArr2);

    expect(obj2["one"]).toEqual(5);
    expect(obj2["two"]).toEqual("hello");
    expect(obj2["three"]).toEqual([]);
  });
});
