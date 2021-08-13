function findLoopStart(list) {
  if (!list || !"next" in list)
    throw new TypeError("Input a proper list with next property");
  let p1 = list,
    p2 = list;
  do {
    if (!p1 || !"next" in p1) return null;
    p1 = p1.next;
    if (!p2 || !"next" in p2) return null;
    p2 = p2.next;
    if (!p2 || !"next" in p2) return null;
    p2 = p2.next;
  } while (p1 !== p2);
  p1 = list;
  while (p1 !== p2) {
    if (!p1 || !"next" in p1) return null;
    p1 = p1.next;
    if (!p2 || !"next" in p2) return null;
    p2 = p2.next;
  }
  return p1;
}

module.exports = findLoopStart;
