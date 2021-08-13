const findLoopStart = require("./02.FindLoopStart");

class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

describe("Function to find the beginning of a loop in a linked list", () => {
  test("If it does not get a list, it throws", () => {
    expect(() => findLoopStart()).toThrow();
  });

  test("If list does not have a loop it returns null", () => {
    const list = new LinkedList(
      1,
      new LinkedList(
        2,
        new LinkedList(
          3,
          new LinkedList(
            4,
            new LinkedList(5, new LinkedList(6, new LinkedList(7)))
          )
        )
      )
    );
    expect(findLoopStart(list)).toBeNull();
  });

  test("List with a simple loop", () => {
    const loopStart = new LinkedList(100);
    const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, loopStart)));
    loopStart.next = new LinkedList(4, new LinkedList(5, new LinkedList(6, loopStart)));
    expect(findLoopStart(list)).toBe(loopStart);
  })

  test("All loop list", () => {
    const loopStart = new LinkedList(0);
    loopStart.next = new LinkedList(
      1,
      new LinkedList(
        2,
        new LinkedList(
          3,
          new LinkedList(
            4,
            new LinkedList(5, new LinkedList(6, new LinkedList(7, loopStart)))
          )
        )
      )
    );
    expect(findLoopStart(loopStart)).toBe(loopStart);
  })
});
