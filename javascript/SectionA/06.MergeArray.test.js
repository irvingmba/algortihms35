const mergeArray = require("./06.MergeArray");

describe("Testing function to merge two sorted arrays", () => {
  test.each([{}, "string", 1234])("If input is %s, it will throw", (input) => {
    expect(() => mergeArray(input)).toThrow();
  });

  test("Merging two simple arrays", () => {
    const first = [1, 2, 3, , , ,];
    const second = [100, 200, 300];
    expect(mergeArray(first, second)).toEqual([1, 2, 3, 100, 200, 300]);
  });

  test("Mergin two array with some mixing", () => {
    const first = [10, 20, 30, , , ,];
    const second = [25, 35, 45];
    expect(mergeArray(first, second)).toEqual([10, 20, 25, 30, 35, 45]);
  });

  test("Mergin two array mixing all their members", () => {
    const first = [10, 20, 30, , , ,];
    const second = [5, 15, 25];
    expect(mergeArray(first, second)).toEqual([5, 10, 15, 20, 25, 30]);
  });
});
