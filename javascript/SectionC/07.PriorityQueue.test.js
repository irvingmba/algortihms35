const PriorityQueue = require("./07.PriorityQueue");

describe("Priority queue implementing a list", () => {
  test("Simple queue without priority", () => {
    const queue = new PriorityQueue();
    [1, 2, 3, 4, 5].map((v) => queue.enqueue(v));
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.getTop()).toHaveProperty("value", 1);
    expect(queue.getLast()).toHaveProperty("value", 5);
    expect(queue.dequeue()).toHaveProperty("value", 1);
    expect(queue.getTop()).toHaveProperty("value", 2);
  });

  test("Simple queue with priority", () => {
    const queue = new PriorityQueue();
    const list5 = [1, 2, 3, 4, 5],
      list20 = [10, 20, 30],
      list15 = [100, 200, 300];
    list5.map((v) => queue.enqueue(v, 5));
    list20.map((v) => queue.enqueue(v, 20));
    list15.map((v) => queue.enqueue(v, 15));
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.getTop()).toHaveProperty("value", 10);
    expect(queue.getLast()).toHaveProperty("value", 5);
    expect(queue.dequeue()).toHaveProperty("value", 10);
    expect(queue.dequeue()).toHaveProperty("value", 20);
    expect(queue.dequeue()).toHaveProperty("value", 30);
    expect(queue.dequeue()).toHaveProperty("value", 100);
    queue.enqueue(77, 20);
    expect(queue.getTop()).toHaveProperty("value", 77);
  });
});
