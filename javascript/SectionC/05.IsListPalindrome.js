function isListPalindrome(list) {
  if (!"next" in list || !"value" in list)
    throw new TypeError("Input a list with next and value properties");
    if(!list.next) return true;
    const half = [];
    let p1 = list, p2 = list, even = false;
    while(p2.next){
      half.push(p1.value);
      p1 = p1.next;
      p2 = p2.next;
      if(!p2.next) {
        even = true;
        break;
      }
      p2 = p2.next;
    }
    p1 = even ? p1 : p1.next;
    while(p1){
      if(!Object.is(half.pop(), p1.value)) return false;
      p1 = p1.next;
    }
    return true;
}

module.exports = isListPalindrome;
