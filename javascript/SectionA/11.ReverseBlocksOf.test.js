const reverseBlocksOf = require("./11.ReverseBlocksOf");

describe("Testing function to reverse n-sized blocks of an array", () => {
  test("If incorrect input types, it will throw", () => {
    expect(() => reverseBlocksOf()).toThrow();
  });

  test("Simple case", () => {
    expect(
      reverseBlocksOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4)
    ).toEqual([4, 3, 2, 1, 8, 7, 6, 5, 12, 11, 10, 9]);
  });

  test("Incomplete case", () => {
    expect(reverseBlocksOf([1, 2, 3, 4, 5, 6], 4)).toEqual([4, 3, 2, 1, 6, 5]);
  });
});
