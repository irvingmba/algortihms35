const swapArrayPos = require("./09.SwapArrayPos");

describe("Testing function to swap positions of the array", () => {
  test.each([{}, "string", 123])("When it gets %s, it throws", () => {
    expect(() => swapArrayPos()).toThrow();
  });

  test("When values of input are not in range, it throws", () => {
    expect(() => swapArrayPos([2, 1, 3, 4])).toThrow();
  });

  test("Simple case", () => {
    const sample = [2, 1, 3, 0];
    const expected = [0, 1, 2, 3];
    expect(swapArrayPos(sample)).toEqual(expected);
  });

  test("Second case", () => {
    const sample = [2, 1, 2, 2, 4];
    const expected = [2, 1, 2, 2, 4];
    expect(swapArrayPos(sample)).toEqual(expected);
  });
});
