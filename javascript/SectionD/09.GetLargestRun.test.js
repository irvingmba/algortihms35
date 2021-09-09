const getLargestRun = require("./09.GetLargestRun");

describe("Function that returns the largest run of two distinct numbers", () => {
  test("If you don't input a number or string, it will throw", () => {
    expect(() => getLargestRun()).toThrow();
  });

  test("Example case 1", () => {
      const sample = "1212223311212223", expected = "1121222";
      expect(getLargestRun(sample)).toMatch(expected);
  })

  test("Example case 2", () => {
      const sample = "111", expected = "111";
      expect(getLargestRun(sample)).toMatch(expected);
  })

  test("Example case 3", () => {
      const sample = "11123102456665556655", expected = "56665556655";
      expect(getLargestRun(sample)).toMatch(expected);
  })
});
