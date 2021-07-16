function balanceSumArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("You must input a proper array");
  let sumLeft = 0,
    sumRigth = 0,
    idxLeft = -1,
    idxRigth = arr.length;
  while (idxLeft + 1 != idxRigth) {
    if (sumLeft === sumRigth || sumLeft < sumRigth) {
      ++idxLeft;
      sumLeft += arr[idxLeft];
      continue;
    }
    if (sumLeft > sumRigth) {
      --idxRigth;
      sumRigth += arr[idxRigth];
      continue;
    }
  }
  return sumLeft === sumRigth ? idxLeft : -1;
}

module.exports = balanceSumArray;
