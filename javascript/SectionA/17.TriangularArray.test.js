const TriangularArray = require("./17.TriangularArray");

describe("Testing function to convert a matrix into a triangular array", () => {
  test("If you don't input a proper array, it will throw", () => {
    expect(() => new TriangularArray()).toThrow();
  });

  test("Case 1", () => {
    const sample = new TriangularArray([
      [1, 0, 0],
      [2, 3, 0],
      [4, 5, 6],
    ]);
    expect(sample.getElem(1,1)).toBe(3);
  });

  test("Case 2", () => {
    const sample = new TriangularArray([
      [1, 0, 0],
      [2, 3, 0],
      [4, 5, 6],
    ]);
    sample.setElem(2,0,1000)
    expect(sample.getElem(2,0)).toBe(1000);
  });

});
