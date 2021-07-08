const CircularQueue = require("./12.CircularQueue");

describe("Testing circular queue implementation", () => {
  test("If you don't provide a size, it will throw", () => {
    expect(() => new CircularQueue()).toThrow();
  });

  test("Simple circular queue", () => {
    const queue = new CircularQueue(5);
    for (let i = 0; i < queue.size; ++i) {
      queue.enQueue(i);
      expect(queue.front).toBe(0);
      expect(queue.rear).toBe(i);
    }
    for(let i=0; i<queue.size; ++i) {
      expect(queue.deQueue()).toBe(i);
    }
  });
});
