const SparseMatrix = require("./18.SparseMatrix");

describe("Test function to convert a matrix to a sparse matrix", () => {
  test("When you don't input a proper matrix, it will throw", () => {
    expect(() => new SparseMatrix()).toThrow();
  });

  test("Case 1", () => {
    const sample = new SparseMatrix([
      [0, 0, 5],
      [1, 0, 0],
      [6, 0, 0],
    ]);
    expect(sample.getElem(0, 2)).toBe(5);
    expect(sample.getElem(1, 1)).toBe(0);
  });

  test("Case 2", () => {
    const sample = new SparseMatrix([
      [0, 0, 5],
      [1, 0, 0],
      [6, 0, 0],
    ]);
    sample.setElem(0, 0, 20);
    expect(sample.getElem(0, 0)).toBe(20);
  });
});
