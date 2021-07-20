const rotateMatrix = require("./05.RotateMatrix");

describe("Testing function to rotate matrix", () => {
  test.each([{}, [], "string", 1234])("It throws when it gets %s", (input) => {
    expect(() => rotateMatrix(input));
  });

  test("Simple case", () => {
    const sample = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];
    expect(rotateMatrix(sample)).toEqual(expected);
  });

  test("Medium case", () => {
    const sample = [
      [1, 0, 0, 0, 0],
      [0, 2, 0, 0, 0],
      [0, 0, 3, 0, 0],
      [0, 0, 0, 4, 0],
      [0, 0, 0, 0, 5],
    ];
    const expected = [
      [0, 0, 0, 0, 5],
      [0, 0, 0, 4, 0],
      [0, 0, 3, 0, 0],
      [0, 2, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ];
    expect(rotateMatrix(sample)).toEqual(expected);
  });

  test("Medium full case", () => {
    const sample = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const expected = [
      [5, 10, 15, 20, 25],
      [4, 9, 14, 19, 24],
      [3, 8, 13, 18, 23],
      [2, 7, 12, 17, 22],
      [1, 6, 11, 16, 21],
    ];
    expect(rotateMatrix(sample)).toEqual(expected);
  });

  test("Squared case", () => {
    const sample = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [
      [4, 8, 12, 16],
      [3, 7, 11, 15],
      [2, 6, 10, 14],
      [1, 5, 9, 13],
    ];
    expect(rotateMatrix(sample)).toEqual(expected);
  });
});
