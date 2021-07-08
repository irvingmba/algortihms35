class CircularQueue {
  constructor(size) {
    if (!size || typeof size != "number")
      throw new TypeError("Input a valid size for circular queue");
    this.size = size;
    this.frontIndex = -1;
    this.rearIndex = -1;
    this.point = null;
  }

  isEmpty() {
    return this.frontIndex > this.rearIndex || this.frontIndex < 0;
  }

  isUsable() {
    return !(
      this.rearIndex === this.size - 1 && this.frontIndex > this.rearIndex
    );
  }

  get front() {
    if (!this.isUsable())
      return console.error("Circular queue not usable anymore");
    if (this.isEmpty()) return console.error("Circular queue is empty");
    const frontPoint = this.point.next;
    return frontPoint.value;
  }

  get rear() {
    if (!this.isUsable())
      return console.error("Circular queue not usable anymore");
    if (this.isEmpty()) return console.error("Circular queue is empty");
    return this.point.value;
  }

  enQueue(value) {
    if (this.frontIndex < 0) ++this.frontIndex;
    if (this.rearIndex === this.size - 1) {
      console.error("No space to store");
      return this;
    }
    ++this.rearIndex;
    const point = new CircularQueueElem(value);
    if (this.point) {
      point.next = this.point.next;
      this.point.next = point;
    }
    this.point = point;
    return this;
  }

  deQueue() {
    if (this.isEmpty()) return console.error("Circular queue is empty");
    const value = this.front;
    ++this.frontIndex;
    if (this.isEmpty()) {
      this.point = null;
    } else {
      const first = this.point.next;
      this.point.next = first.next;
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
