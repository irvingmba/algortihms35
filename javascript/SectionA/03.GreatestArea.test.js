const greatestArea = require("./03.GreatestArea");

describe("Testing function to search greatest area", () => {
  test("When it does not receive an array, it throws", () => {
    expect(() => greatestArea({})).toThrow();
  });

  test("Simple find area example", () => {
    const area = [
      [0, 1, 1],
      [0, 1, 1],
      [1, 1, 0],
    ];
    const found = greatestArea(area);
    expect(found).toBe(4);
  });

  test("Case 1", () => {
    const area = [
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ];
    const found = greatestArea(area);
    expect(found).toBe(6);
  });

  test("Case 2", () => {
    const area = [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 0, 1],
    ];
    const found = greatestArea(area);
    expect(found).toBe(6);
  });

  test("Case 3", () => {
    const area = [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ];
    const found = greatestArea(area);
    expect(found).toBe(9);
  });

  test("Case 3", () => {
    const area = [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
    ];
    const found = greatestArea(area);
    expect(found).toBe(5);
  });

  test("Case 4", () => {
    const area = [
      [1, 1, 0, 0, 1],
      [1, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1],
    ];
    const found = greatestArea(area);
    expect(found).toBe(6);
  });
});
