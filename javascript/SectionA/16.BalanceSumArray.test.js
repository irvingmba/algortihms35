const balanceSumArray = require("./16.BalanceSumArray");

describe("Testing function to find the index where sum is balanced", () => {
  test("When you don't input an array, it will throw", () => {
    expect(() => balanceSumArray()).toThrow();
  });

  test("Case 1", () => {
    expect(balanceSumArray([1, 2, 3, 1, 2, 3])).toBe(2);
  });

  test("Case 2", () => {
    expect(balanceSumArray([1, 2, 8, 4, 3, 6, 1, 5])).toBe(3);
  });

  test("Case 3", () => {
    expect(balanceSumArray([100, 2, 8, 4, 3, 6, 1, 5])).toBe(-1);
  });
});
