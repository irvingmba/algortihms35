const getMajorityNum = require("./10.GetMajorityNum");

describe("Function that returns the majority number of an array", () => {
  test("If input is not an array number, it will throw", () => {
    expect(() => getMajorityNum()).toThrow();
  });

  test("Get simple majority", () => {
    const numbers = [1, 2, 3, 3, 3];
    expect(getMajorityNum(numbers)).toBe(3);
  });

  test("If no majority number, it will return null", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    expect(getMajorityNum(numbers)).toBeNull();
});

test("When array has one element", () => {
      const numbers = [1];
      expect(getMajorityNum(numbers)).toBe(1);
  })
});
