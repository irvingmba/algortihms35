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
    const fishes = [new Fish(5, "rigth"), new Fish(10, "left")];
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

  test("All to the rigth", () => {
    const fishes = [
      new Fish(5, "rigth"),
      new Fish(10, "rigth"),
      new Fish(12, "rigth"),
    ];
    expect(getSurvivorFish(fishes)).toBe(3);
  });

  test("Example test", () => {
    const fishes = [
      new Fish(2, "left"),
      new Fish(6, "rigth"),
      new Fish(1, "rigth"),
      new Fish(7, "left"),
      new Fish(5, "left"),
      new Fish(4, "rigth"),
      new Fish(3, "left"),
    ];
    expect(getSurvivorFish(fishes)).toBe(4);
  });

  test("All survives", () => {
    const fishes = [
      new Fish(2, "left"),
      new Fish(3, "left"),
      new Fish(4, "rigth"),
      new Fish(5, "rigth"),
      new Fish(6, "rigth"),
    ];
    expect(getSurvivorFish(fishes)).toBe(5);
  });

});
