function findKMax(numbers, place) {
  if (!Array.isArray(numbers)) throw new TypeError("Input a proper array");
  if (place > numbers.length || place < 1) throw new TypeError("Out of boudaries");
  let tree = new TreeElement(),
    max = Number.MIN_VALUE,
    count = 0;
  for (const number of numbers) {
    if (count < place) {
      tree = add2Tree(number,tree);
      ++count;
      if(number > max) max = getMin(tree);
    } else if(number>max){
      tree = deleteMin(add2Tree(number, tree));
      max = getMin(tree);
    }
  }
  return max;
}

class TreeElement {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

function add2Tree(value, tree = new TreeElement()) {
  if (!tree.value) {
    tree.value = value;
    return tree;
  }
  if (value < tree.value) {
    if (tree.left) {
      add2Tree(value, tree.left);
    } else {
      tree.left = new TreeElement(value);
    }
  } else {
    if (tree.rigth) {
      add2Tree(value, tree.rigth);
    } else {
      tree.rigth = new TreeElement(value);
    }
  }
  return tree;
}

function deleteMin(tree) {
  const child = tree.left;
  if (child) {
    tree.left = deleteMin(tree.left);
  } else {
    return tree.rigth;
  }
  return tree;
}

function getMin(tree) {
  if (tree.left) {
    return getMin(tree.left);
  } else {
    return tree.value;
  }
}

module.exports = findKMax;
