const zeroMatrix = require("./07.ZeroMatrix");

describe("Testing function to zero all the columns and rows where zero is found", () => {
  test.each([{}, [], "string", 123])("When it gets %s, it throws", (input) => {
    expect(() => zeroMatrix(input)).toThrow();
  });

  test("Simple case", () => {
    const sample = [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ];
    const expected = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(zeroMatrix(sample)).toEqual(expected);
  });

  test("Medium case", () => {
    const sample = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const expected = [
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
    ];
    expect(zeroMatrix(sample)).toEqual(expected);
  });
});
