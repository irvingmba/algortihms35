class CircularQueue {
  constructor(size) {
    if (!size || typeof size != "number")
      throw new TypeError("Input a valid size for circular queue");
    this.size = size;
    // this.frontIndex = -1;
    // this.rearIndex = -1;
    this.used = 0;
    this.point = null;
  }

  isEmpty() {
    return !this.used;
  }

  isUsable() {
    return !(
      this.rearIndex === this.size - 1 && this.frontIndex > this.rearIndex
    );
  }

  get front() {
    if (this.isEmpty()) return console.error("Circular queue is empty");
    const frontPoint = this.point.next;
    return frontPoint.value;
  }

  get rear() {
    if (this.isEmpty()) return console.error("Circular queue is empty");
    return this.point.value;
  }

  enQueue(value) {
    // if (this.frontIndex < 0) ++this.frontIndex;
    // ++this.rearIndex;
    const point = new CircularQueueElem(value);
    if(this.size === this.used){
      this.point.next = point;
      return this;
    };
    if (this.point) {
      point.next = this.point.next;
      this.point.next = point;
    }
    this.point = point;
    ++this.used;
    return this;
  }

  deQueue() {
    if (this.isEmpty()) return console.error("Circular queue is empty");
    const value = this.front;
    // ++this.frontIndex;
    if (this.used === 0) {
      this.point = null;
    } else {
      const first = this.point.next;
      this.point.next = first.next;
      --this.used;
    }
    return value;
  }
}

class CircularQueueElem {
  constructor(value) {
    this.value = value;
    this.next = this;
  }
}

module.exports = CircularQueue;
