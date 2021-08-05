const findMiddlePoint = require("./01.LinkedList");

class LinkElem {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

describe("Function that finds the middle point of a linked list", () => {
  test("Input must have a value and next property", () => {
    expect(() => findMiddlePoint()).toThrow();
  });

  test("Simple search", () => {
      const list = new LinkElem(0);
      let point = list;
      for(let i = 0; i<2;++i) {
        point.next = new LinkElem(1+i);
        point = point.next;
      }
      expect(findMiddlePoint(list)).toHaveProperty("value", 1);
    });
    
    test("Search on even list", () => {
      const list = new LinkElem(0);
      let point = list;
      for(let i = 0; i<5;++i) {
        point.next = new LinkElem(1+i);
        point = point.next;
      }
      expect(findMiddlePoint(list)).toHaveProperty("value", 2);
      
  })

    test("Search on odd list", () => {
      const list = new LinkElem(0);
      let point = list;
      for(let i = 0; i<6;++i) {
        point.next = new LinkElem(1+i);
        point = point.next;
      }
      expect(findMiddlePoint(list)).toHaveProperty("value", 3);
      
  })
});
