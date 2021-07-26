const carsCrossing = require("./21.CarsCrossing");

describe("Testing function to determine how many times cars cross each other", () => {
  test("If input is not a matrix, it throws", () => {
    expect(() => carsCrossing()).toThrow();
  });

  test("Very simple test", () => {
    const cars = [
      [0, "R", 0],
      [0, 0, 0],
      [0, 0, "L"],
    ];
    expect(carsCrossing(cars)).toBe(1);
  });

  test("Non crossing simple test", () => {
    const cars = [
      [0, "R", 0],
      [0, 0, 0],
      [0, 0, "R"],
    ];
    expect(carsCrossing(cars)).toBe(0);
  });

  test("Example test", () => {
    const cars = [
      [0, 0, "R", 0, 0, 0, 0, 0],
      ["R", 0, 0, 0, "R", 0, 0, 0],
      [0, "L", 0, 0, 0, "L", 0, 0],
      [0, 0, 0, 0, 0, 0, "L", 0],
      [0, 0, 0, 0, 0, 0, 0, "R"],
    ];
    expect(carsCrossing(cars)).toBe(7);
  });
});
