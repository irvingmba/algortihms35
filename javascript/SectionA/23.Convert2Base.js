function convert2Base(num, base) {
  if (typeof num != "number" && typeof base != "number")
    throw new TypeError("Input a proper number");
  if (base < 2 || base > 36)
    throw new TypeError("Range of bases is from 2 to 36");
  const acc = new Stack();
  while (num) {
    const mod = num % base;
    if (mod > 9) {
      acc.push("abcdefghijklmnopqrstuvwxyz".charAt(mod - 9-1).toUpperCase());
    } else {
      acc.push(num % base);
    }
    num = Math.floor(num / base);
  }
  let res = "";
  while (!acc.isEmpty()) {
    res += acc.pop();
  }
  return base < 10 ? Number.parseInt(res) : res;
}

class Stack {
  constructor() {
    this.storage = [];
  }
  pop() {
    return this.storage.pop();
  }
  push(n) {
    return this.storage.push(n);
  }
  isEmpty() {
    return !this.storage.length;
  }
}

module.exports = convert2Base;
