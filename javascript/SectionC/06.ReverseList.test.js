const reverseList = require("./06.ReverseList");

class LinkedElem {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
};

describe("Function that reverse a linked list", () => {
  test("If list does not have next property, it throws", () => {
    expect(() => reverseList()).toThrow();
  });

  test("Simple list reverse", () => {
      const list = new LinkedElem(1,new LinkedElem(2, new LinkedElem(3)));
      const reversed = reverseList(list);
      expect(reversed).toHaveProperty("value",3);
      expect(reversed).toHaveProperty(["next","value"],2);
      expect(reversed).toHaveProperty(["next","next","value"],1);
  })
});
