const flattenArray = require("./13.FlattenArray");

describe("Testing function to flatten arrays", () => {
  test("If you input incorrect type, it will throw", () => {
    expect(() => flattenArray()).toThrow();
  });

  test("Flatten array recursively", () => {
    const sample = [1, [2, [3], 4], 5];
    expect(flattenArray(sample, true)).toEqual([1, 2, 3, 4, 5]);
  });

  test("Recursive flatten cases", () => {
    const sample1 = [[[1], 2], 3, 4];
    expect(flattenArray(sample1, true)).toEqual([1, 2, 3, 4]);
    const sample2 = [1, [2, 3], 4, [5, 6], 7];
    expect(flattenArray(sample2, true)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("Flatten array with loop", () => {
    const sample = [1, [2, [3], 4], 5];
    expect(flattenArray(sample)).toEqual([1, 2, 3, 4, 5]);
  });

  test("Iterative flatten cases", () => {
    const sample1 = [[[1], 2], 3, 4];
    expect(flattenArray(sample1)).toEqual([1, 2, 3, 4]);
    const sample2 = [1, [2, 3], 4, [5, 6], 7];
    expect(flattenArray(sample2)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });


});
