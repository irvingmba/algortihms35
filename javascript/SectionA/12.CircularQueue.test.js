const CircularQueue = require("./12.CircularQueue");

describe("Testing circular queue implementation", () => {
  test("If you don't provide a size, it will throw", () => {
    expect(() => new CircularQueue()).toThrow();
  });

  test("Simple circular queue", () => {
    const queue = new CircularQueue(5);
    let value = 0;
    queue.enQueue(value++);
    queue.enQueue(value++);
    queue.enQueue(value++);
    queue.enQueue(value++);
    queue.enQueue(value++);
    expect(queue.front).toBe(0);
    expect(queue.rear).toBe(value - 1);
    value = 0;
    expect(queue.deQueue()).toBe(value++);
    expect(queue.deQueue()).toBe(value++);
    expect(queue.deQueue()).toBe(value++);
    expect(queue.deQueue()).toBe(value++);
    expect(queue.deQueue()).toBe(value++);
  });
});
