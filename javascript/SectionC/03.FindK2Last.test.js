const findK2Last = require("./03.FindK2Last");

class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

describe("Function that returns the k-th node to the last element in a linked list", () => {
  test("If it does not get a list with next property, it throws", () => {
    expect(() => findK2Last()).toThrow();
  });

  test("If it does not get a k number, it throws", () => {
    expect(() => findK2Last({ next: null })).toThrow();
  });

  test("Simple list case", () => {
    const expected = new LinkedList(3, new LinkedList(4, new LinkedList(5)));
    const list = new LinkedList(1, new LinkedList(2, expected));
    expect(findK2Last(list, 2)).toBe(expected);
  });

  test("Kth does not exist", () => {
    const list = new LinkedList(
      1,
      new LinkedList(2, new LinkedList(3, new LinkedList(4, new LinkedList(5))))
    );
    expect(findK2Last(list, 20)).toBeNull();
  });

  test("Kth is 0", () => {
    const expected = new LinkedList(6);
    const list = new LinkedList(
      1,
      new LinkedList(
        2,
        new LinkedList(3, new LinkedList(4, new LinkedList(5, expected)))
      )
    );
    expect(findK2Last(list, 0)).toBe(expected);
  });
});
