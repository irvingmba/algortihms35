const getLCS = require("./06.getLCS");

describe("Function that gets the lcs of 2 strings", () => {
  test("If you don't input 2 strings, it will throw", () => {
    expect(() => getLCS()).toThrow();
  });

  test("Simple case", () => {
    const lcs = getLCS("ABCDGH", "AEDFHR");
    expect(lcs).toBe(3);
  });

  test("First short", () => {
    const lcs = getLCS("HI", "HIGHLANDER");
    expect(lcs).toBe(2);
  });

  test("Second short", () => {
    const lcs = getLCS("HIGHLANDER", "HI");
    expect(lcs).toBe(2);
  });
});
