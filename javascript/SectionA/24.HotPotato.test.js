const hotPotato = require("./24.HotPotato");

describe("Testing function that simulates hot potato game using queues", () => {
  test("When you don't input members, it will throw", () => {
    expect(() => hotPotato()).toThrow();
  });

  test("Simple hot potato game", () => {
    const members = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const winner = hotPotato(members);
    expect(winner).toBeGreaterThanOrEqual(1);
    expect(winner).toBeLessThanOrEqual(10);
  });

  test("Hot potato with names", () => {
    const members = [
      "Hotaru",
      "Mikasa",
      "Paul",
      "Rina",
      "Raftalia",
      "Maria",
      "John",
    ];
    const winner = hotPotato(members);
    expect(members).toContain(winner);
  });
});
