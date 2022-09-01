const { orvilleTheCat, whiteHouse, singleDigitPrimes } = require("./index.js");

describe("orvilleTheCat", () => {
  it("should have the name Orville", () => {
    expect(orvilleTheCat.name).toEqual("Orville");
  });
  it("should have an age equal to 11", () => {
    expect(orvilleTheCat.age).toEqual(11);
  });
  it("should have a property called isFriendly equal to the boolean true", () => {
    expect(orvilleTheCat.isFriendly).toEqual(true);
  });
});
describe("whiteHouse", () => {
  it("should have the correct address", () => {
    expect(whiteHouse.address).toEqual(
      "1600 Pennsylvania Ave NW, Washington, DC 20500"
    );
  });
  it("should have the current occupant, Donald Trump", () => {
    expect(whiteHouse.currentOccupant).toEqual("Donald Trump");
  });
  it("should have the date completed", () => {
    expect(whiteHouse.dateCompleted).toEqual("November 1, 1800");
  });
  describe("singleDigitPrimes", () => {
    it("should have a list property with an array of prime numbers", () => {
      expect(singleDigitPrimes.list).toEqual([2, 3, 5, 7]);
    });
    it("should have a count property which is equal to the length of the list", () => {
      expect(singleDigitPrimes.count).toBe(4);
    });
    it("should have a sum property equal to the sum of the single digit primes", () => {
      expect(singleDigitPrimes.sum).toBe(17);
    });
  });
});
