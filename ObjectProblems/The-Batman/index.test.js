const { thomasWayne, marthaWayne, bruceWayne, mugger } = require("./index.js");

describe("Batman's origin story", () => {
  it("Thomas Wayne should no longer have a wallet", () => {
    expect(thomasWayne.wallet).toBe(undefined);
    expect(thomasWayne).toEqual({});
  });
  it("Martha Wayne should no longer have pearls", () => {
    expect(marthaWayne.pearls).toBe(undefined);
    expect(marthaWayne).toEqual({});
  });
  it("The mugger should now have both the pearls and the wallet", () => {
    expect(mugger.wallet.cash).toBe(400);
    expect(mugger.pearls.value).toBe(100);
  });
  it("The mugger should now only have one bullet left in his pistol", () => {
    expect(mugger.pistol.bullets.length).toBe(1);
  });
  it("Bruce Wayne should no longer have a parents property and instead should a property isBatman that is set to true", () => {
    expect(bruceWayne.parents).toBe(undefined);
    expect(bruceWayne.isBatman).toBe(true);
  });
});
