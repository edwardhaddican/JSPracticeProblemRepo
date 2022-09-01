const objectPop = require("./index.js");

describe("objectPop", () => {
  it("should return string value from the object", () => {
    let testObj = { soda: "Fanta", flavor: "Grape" };

    expect(objectPop("flavor", testObj)).toEqual("Grape");
  });
  it("should remove the key/value from the object", () => {
    let testObj2 = {
      sky: "blue",
      hot: "pink",
      lime: "green",
    };
    let result = objectPop("sky", testObj2);
    let keys = Object.keys(testObj2);
    let values = Object.values(testObj2);

    expect(keys.includes("sky")).toEqual(false);
    expect(values.includes("blue")).toEqual(false);

    expect(testObj2).toEqual({ hot: "pink", lime: "green" });
  });
});
