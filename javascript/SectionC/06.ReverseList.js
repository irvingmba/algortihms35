function reverseList(list){
    if(!"next" in list) throw new TypeError("Input a proper list");
    let reversed = null;
    while(list){
        const next = list.next;
        list.next = reversed;
        reversed = list;
        list = next;
    }
    return reversed;
};

module.exports = reverseList;