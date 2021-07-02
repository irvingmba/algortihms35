const sumArray = require("./08.SumArray");

describe("Testing function to add two single-digit arrays", () => {
  test.each([
    [undefined, undefined],
    [{}, {}],
    [
      [12, 13],
      [14, 15],
    ],
    ["string", "string"],
  ])("When you input %s and %s, it will throw", (arr1, arr2) => {
    expect(() => sumArray(arr1,arr2)).toThrow();
  });

  test("Simple test", () => {
      expect(sumArray([9,9],[1])).toEqual([1,0,0]);
  })

  test("Larger test", () => {
    expect(sumArray([1,1],[1,1])).toEqual([2,2]);
  })

  test("Other test", () => {
    expect(sumArray([9,9],[1,0,1])).toEqual([2,0,0]);
  })
});
