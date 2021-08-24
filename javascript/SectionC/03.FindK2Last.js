function findK2Last(list, k) {
  if (!list || !"next" in list)
    throw new TypeError("Input a proper list with next property");
  if (typeof k !== "number") throw new TypeError("You must input a k number");
  let p1 = list,
    p2 = list,
    acc = 0;
  while (p1.next) {
    if (acc < k) {
      ++acc;
      p1 = p1.next;
    } else {
      p1 = p1.next;
      p2 = p2.next;
    }
  }
  return acc < k ? null : p2;
}

module.exports = findK2Last;
