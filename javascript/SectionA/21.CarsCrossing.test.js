const carsCrossing = require("./21.CarsCrossing");

describe("Testing function to determine how many times cars cross each other", () => {
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

  test("Cars in one row", () => {
    const cars = ["R", "L", "R", "L"];
    expect(carsCrossing(cars)).toBe(3);
  });
});
