const objectPush = require("./index.js");

describe("objectPush", () => {
  it("should add the key/value pair to the object", () => {
    let testObj = {};
    let keyName = "hello";
    let value = "world";

    objectPush(keyName, value, testObj);
    expect(testObj[keyName]).toEqual(value);
  });
  it("should return how many properties the object has now ", () => {
    let testObj = {};

    let numProps = objectPush("apples", "oranges", testObj);
    expect(numProps).toEqual(1);

    numProps = objectPush("mint", "chocolate", testObj);
    expect(numProps).toEqual(2);
  });
});
