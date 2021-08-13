const getSurvivorFish = require("./22.GetSurvivorFish");

class Fish {
  constructor(size, direction) {
    this.size = size;
    this.direction = direction;
  }
}

describe("Test function that gets how many fishes will survive", () => {
  test("If you don't input an array, it will throw", () => {
    expect(() => getSurvivorFish()).toThrow();
  });

  test("Simple fish figth", () => {
    const fishes = [new Fish(5, "right"), new Fish(10, "left")];
    expect(getSurvivorFish(fishes)).toBe(1);
  });

  test("All to the left", () => {
    const fishes = [
      new Fish(5, "left"),
      new Fish(10, "left"),
      new Fish(12, "left"),
    ];
    expect(getSurvivorFish(fishes)).toBe(3);
  });

  test("All to the right", () => {
    const fishes = [
      new Fish(5, "right"),
      new Fish(10, "right"),
      new Fish(12, "right"),
    ];
    expect(getSurvivorFish(fishes)).toBe(3);
  });

  test("Example test", () => {
    const fishes = [
      new Fish(2, "left"),
      new Fish(6, "right"),
      new Fish(1, "right"),
      new Fish(7, "left"),
      new Fish(5, "left"),
      new Fish(4, "right"),
      new Fish(3, "left"),
    ];
    expect(getSurvivorFish(fishes)).toBe(4);
  });

  test("All survives", () => {
    const fishes = [
      new Fish(2, "left"),
      new Fish(3, "left"),
      new Fish(4, "right"),
      new Fish(5, "right"),
      new Fish(6, "right"),
    ];
    expect(getSurvivorFish(fishes)).toBe(5);
  });

  test("Simple figth fish 2", () => {
    const fishes = [
      { size: 2, direction: "right" },
      { size: 6, direction: "left" },
    ];
    expect(getSurvivorFish(fishes)).toBe(1);
  });

  test("Simple figth fish with numbers", () => {
    const fishes = [5, -2];
    expect(getSurvivorFish(fishes)).toBe(1);
  });

  test("Simple figth fish 2 with numbers", () => {
    const fishes = [2, -6];
    expect(getSurvivorFish(fishes)).toBe(1);
  });

  test("Mixed fish objects and fish numbers", () => {
    const fishes = [
      new Fish(2, "left"),
      6,
      new Fish(1, "right"),
      -7,
      new Fish(5, "left"),
      4,
      new Fish(3, "left"),
    ];
    expect(getSurvivorFish(fishes)).toBe(4);
  })
});
