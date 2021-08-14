function mergeSortList(list) {
  if (!list || !"next" in list)
    throw new TypeError("Input a proper list with next property");
  if (!list.next) return list;
  const [left, right] = splitList(list);
  const sortedLeft = mergeSortList(left),
    sortedRight = mergeSortList(right);
  if (!sortedLeft) return sortedRight;
  if (!sortedRight) return sortedLeft;
  return mergeSorted(sortedLeft, sortedRight);
}

function splitList(list) {
  let p1 = list,
    p2 = list;
  do {
    if (!p2 || !p2.next) break;
    p2 = p2.next;
    if (!p2 || !p2.next) break;
    p1 = p1.next;
    p2 = p2.next;
  } while (p2.next);
  const half1 = list;
  const half2 = p1.next;
  p1.next = null;
  return [half1, half2];
}

function mergeSorted(left, right) {
  let pLeft = left,
    pRight = right,
    merged = null,
    last = null;
  while (pLeft || pRight) {
    if(!pLeft){
        last.next = pRight;
        break;
    }
    if(!pRight){
        last.next = pLeft;
        break;
    }
    if (!merged) {
      if (pLeft.value < pRight.value) {
        merged = pLeft;
        last = pLeft;
        pLeft = pLeft.next;
      } else {
        merged = pRight;
        last = pRight;
        pRight = pRight.next;
      }
    } else {
      if (pLeft.value < pRight.value) {
        last.next = pLeft;
        last = last.next;
        pLeft = pLeft.next;
      } else {
        last.next = pRight;
        last = last.next;
        pRight = pRight.next;
      }
    }
  }
  return merged;
}

module.exports = mergeSortList;
