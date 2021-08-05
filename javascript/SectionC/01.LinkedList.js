function findMiddlePoint(point) {
  if (!"value" in point && !"next" in point)
    throw new TypeError("Input an object with value and next properties");
    let middle = point, last = point;
    while(last){
        // last = "next" in last ? last : !"next" in last.next ? last : last.next.next;
        last = "next" in last ? last.next : last;
        last = last && "next" in last ? last.next : last;
        middle = last ? middle.next : middle;
    }
    return middle;
}

module.exports = findMiddlePoint;