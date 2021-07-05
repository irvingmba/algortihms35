const maxArrayValue = require("./01.maxArrayValue");

describe("Testing function to get max value from array", () => {

    test("When function does not get a parameter, it throws", () => {
        expect(()=>maxArrayValue()).toThrow();
    })

  test.each([{ input: {} }, { input: "string" }, { input: 12345 }])(
    "If input is $input, it throws",
    ({ input }) => {
      expect(() => maxArrayValue(input)).toThrow();
    }
  );

  test("It will return the max value from an array", () => {
    const max = maxArrayValue([5, 2, 7, 9, 1, 10]);
    expect(max).toBe(10);
  });
});
