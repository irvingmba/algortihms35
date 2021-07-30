const levenshtein = require("./02.Levenshtein");

describe("Function that calculates editing distance between 2 strings", () => {
  test("If you don't input 2 strings, it throws", () => {
    expect(() => levenshtein()).toThrow();
  });

  test("Simple edit distance", () => {
    expect(levenshtein("keith", "keen")).toBe(3);
    expect(levenshtein("keen", "peep")).toBe(2);
  })

  test("A little large words test", () => {
    expect(levenshtein("november","december")).toBe(3);
  })
});
