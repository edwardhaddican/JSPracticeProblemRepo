const guidedTour = require("./index.js");

describe("guidedTour", () => {
  it("should return an array", () => {
    let londonMap = {
      "Big Ben": "The British Museum",
      "London Eye": "Big Ben",
    };
    let result = guidedTour("London Eye", londonMap);

    expect(result).toBeInstanceOf(Array);
  });
  it("should return the starting point as the first index", () => {
    let newYorkMap = {
      "Times Square": "Brooklyn Bridge",
      "Central Park": "Statue of Liberty",
      "Statue of Liberty": "Times Square",
      "Brooklyn Bridge": "Grand Central Terminal",
    };

    let result = guidedTour("Times Square", newYorkMap);

    expect(result[0]).toBe("Times Square");
  });
  it("should return an array with the correct stops", () => {
    let franceMap = {
      "Eiffel Tower": "Louvre Museum",
      "Arc de Triomphe": "Palace of Versailles",
      "Louvre Museum": "Arc de Triomphe",
    };

    let result = guidedTour("Eiffel Tower", franceMap);

    expect(result.length).toBe(4);
    expect(result).toEqual([
      "Eiffel Tower",
      "Louvre Museum",
      "Arc de Triomphe",
      "Palace of Versailles",
    ]);
  });
});
