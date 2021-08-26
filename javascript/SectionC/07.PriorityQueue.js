class LinkedElem {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class PriorityElem extends LinkedElem {
  constructor(value, priority) {
    super(value);
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.list = null;
  }
  isEmpty() {
    return !this.list;
  }
  enqueue(value, priority = 0) {
    const queueElem = new PriorityElem(value, priority),
      last = this.getLast(priority);
    if (last) {
      if (last.next) {
        const rest = last.next;
        queueElem.next = rest;
      }
      last.next = queueElem;
      return;
    }
    queueElem.next = this.list;
    this.list = queueElem;
    return;
  }
  dequeue() {
    if(this.isEmpty()) return this.list;
    const first = this.getTop();
    this.list = first.next;
    return first;
  }
  getLast(priority = 0) {
    if (this.isEmpty()) return this.list;
    if (this.list.priority < priority) return null;
    let last = this.list;
    while (last.next && last.next.priority >= priority) {
      last = last.next;
    }
    return last;
  }
  // getLastParent(priority = 0) {
  //   if (this.isEmpty()) return this.list;
  //   let child = this.list.next, grandChild = "next" in child ? child.next : null;
  //   if (!grandChild) {
  //     return null;
  //   }
  //   let lastParent = this.list;
  //   while (grandChild) {
  //     lastParent = lastParent.next;
  //     grandChild = grandChild.next;
  //   }
  //   return lastParent;
  // }
  getTop() {
    return this.list;
  }
}

module.exports = PriorityQueue;
