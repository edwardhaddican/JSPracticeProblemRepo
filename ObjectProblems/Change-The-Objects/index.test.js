const { removeSuperfluousData, updateNumber } = require("./index.js");

describe("removeSuperfluousData", () => {
  it("should remove the superfluous data from an obj", () => {
    let testObj = { number: 1, superfluousData: true };

    removeSuperfluousData(testObj);

    expect(testObj).toEqual({ number: 1 });
  });
});
describe("updateNumber", () => {
  it("should halve the number if it is even", () => {
    let testObj2 = { number: 212 };

    updateNumber(testObj2);
    expect(testObj2).toEqual({ number: 106 });

    updateNumber(testObj2);
    expect(testObj2).toEqual({ number: 53 });
  });
  it('should add a property called errorMessage set to "Cannot halve an odd number at this time" if given an odd number', () => {
    let testObj3 = { number: 55 };
    updateNumber(testObj3);

    expect(testObj3.errorMessage).toEqual(
      "Cannot halve an odd number at this time"
    );
  });
});
