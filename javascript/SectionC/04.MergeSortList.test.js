const mergeSortList = require("./04.MergeSortList");

class LinkedList {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

describe("Function that returns the k-th node to the last element in a linked list", () => {
    test("If it does not get a list with next property, it throws", () => {
      expect(() => mergeSortList()).toThrow();
    });

    test("Sort simple list", () => {
        const list = new LinkedList(5,new LinkedList(2, new LinkedList(1, new LinkedList(9, new LinkedList(7)))));
        const expected = new LinkedList(1, new LinkedList(2, new LinkedList(5, new LinkedList(7, new LinkedList(9)))));
        const sorted = mergeSortList(list);
        expect(sorted).toEqual(expected);
    })
  
  });