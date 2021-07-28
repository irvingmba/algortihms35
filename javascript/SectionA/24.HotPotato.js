const CircularQueue = require("./12.CircularQueue");

function hotPotato(members) {
  if (!Array.isArray(members))
    throw new TypeError("Input an array with the members");
  const potatoContest = new PotatoQueue(members.length);
  members.map((v) => potatoContest.enQueue(v));
  while (potatoContest.length > 1) {
    potatoContest.randomizeFirst();
    potatoContest.deQueue();
  }
  return potatoContest.front;
}

class PotatoQueue extends CircularQueue {
  constructor(size) {
    super(size);
  }
  get length() {
    return this.used;
  }
  randomizeFirst(limit = 20) {
    const random = Math.ceil(Math.random() * limit);
    for (let i = 0; i < random; ++i) {
      const firstPoint = this.point.next;
      this.point = firstPoint;
    }
  }
}

module.exports = hotPotato;
