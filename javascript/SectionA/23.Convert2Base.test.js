const convert2Base = require("./23.Convert2Base");

describe("Testing function to convert base 10 numbers to any other base", () => {
  test("If you don't input a number, it will throw", () => {
    expect(() => convert2Base()).toThrow();
  });

  test("Convert to binary", () => {
      expect(convert2Base(1020, 2)).toBe(1111111100);
  })

  test("Convert to octal", () => {
      expect(convert2Base(1020, 8)).toBe(1774);
  })

  test("Convert to hex", () => {
      expect(convert2Base(1020, 16)).toBe("3FC");
  })

  test("Convert to base 30", () => {
      expect(convert2Base(1020, 30)).toBe("140");
  })

  test("Convert to base 36", () => {
      expect(convert2Base(46655, 36)).toBe("ZZZ");
  })

});
