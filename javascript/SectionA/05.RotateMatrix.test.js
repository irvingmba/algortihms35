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

  test("Not squared case", () => {
    const sample = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expected = [
      [3, 6],
      [2, 5],
      [1, 4],
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
});
