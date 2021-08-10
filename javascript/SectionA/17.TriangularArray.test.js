const TriangularArray = require("./17.TriangularArray");

describe("Testing function to convert a matrix into a triangular array", () => {
  test("If you don't input a proper array, it will throw", () => {
    expect(() => new TriangularArray()).toThrow();
  });

  test("If matrix is not a mirror, it throws", () => {
    const matrix = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];
    expect(() => new TriangularArray(matrix)).toThrow();
  });

  test("Case 1", () => {
    const sample = new TriangularArray([
      [1, 2, 4],
      [2, 3, 5],
      [4, 5, 6],
    ]);
    expect(sample.getElem(1, 1)).toBe(3);
    expect(sample.getElem(2, 0)).toBe(sample.getElem(0, 2));
  });

  test("Case 2", () => {
    const sample = new TriangularArray([
      [1, 2, 4],
      [2, 3, 5],
      [4, 5, 6],
    ]);
    sample.setElem(2, 1, 1000);
    expect(sample.getElem(2, 1)).toBe(1000);
    expect(sample.getElem(1, 2)).toBe(1000);
  });
});
