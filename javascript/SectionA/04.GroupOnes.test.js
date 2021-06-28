const groupOnes = require("./04.GroupOnes");

describe("Testing function to find groups of 1s", () => {
  test.each([{}, [], "string", 123])("When it gets %s, it throws", (input) => {
    expect(() => groupOnes(input)).toThrow();
  });

  test("Empty matrix", () => {
      const groups = groupOnes([[]]);
      expect(groups).toBe(0);
  })

  test("Testing vector", () => {
    const groups = groupOnes([[1,0,1,0,1]]);
    expect(groups).toBe(3);
  })

  test("Simple case", () => {
    const simpleCase = [
      [1, 1, 0, 1],
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
    ];
    const groups = groupOnes(simpleCase);
    expect(groups).toBe(3);
  });

  test("Second case", () => {
    const secCase = [
      [1, 1, 0, 1, 0],
      [1, 0, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1],
    ];
    const groups = groupOnes(secCase);
    expect(groups).toBe(3);
  });

  test("Diagonal case", () => {
    const diagCase = [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ];
    const groups = groupOnes(diagCase);
    expect(groups).toBe(9);
  });

  test("Divided case", () => {
    const divCase = [
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0],
    ];
    const groups = groupOnes(divCase);
    expect(groups).toBe(3);
  });

  test("4 Groups case", () => {
    const groupCase = [
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
    ];
    const groups = groupOnes(groupCase);
    expect(groups).toBe(4);
  });
});
