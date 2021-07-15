const searchMatrix = require("./15.SearchMatrix");

describe("Testing function to find an element withim a sorted matrix", () => {
  test("If you don't input a proper matrix, it will throw", () => {
    expect(() => searchMatrix()).toThrow();
  });

  test("Find a number simple case", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(searchMatrix(matrix, 2)).toEqual([0,1]);
    expect(searchMatrix(matrix, 7)).toEqual([2,0]);
    expect(searchMatrix(matrix, 9)).toEqual([2,2]);
    expect(searchMatrix(matrix, 1)).toEqual([0,0]);
    expect(searchMatrix(matrix, 0)).toEqual([]);
  });
});
