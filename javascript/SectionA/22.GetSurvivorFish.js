function getSurvivorFish(fishes) {
  if (!Array.isArray(fishes)) throw new TypeError("You must input an array");
  let fishes2Right = [],
    fishes2Left = 0;
  for (const fish of fishes) {
    if(typeof fish === "number"){
      [fishes2Left, fishes2Right] = fishFigthNums(fishes2Left, fishes2Right, fish);
      continue;
    }
    if (fishes2Right.length) {
      if (fish.direction === "left") {
        while (fishes2Right.length) {
          const fish2Rigth = fishes2Right[fishes2Right.length - 1];
          if (fish.size > fish2Rigth.size) {
            fishes2Right.pop();
            continue;
          }
          break;
        }
      } else {
        fishes2Right.push(fish);
      }
      if (!fishes2Right.length) ++fishes2Left;
    } else {
      if (fish.direction === "right") {
        fishes2Right.push(fish);
      } else {
        ++fishes2Left;
      }
    }
  }
  return fishes2Left + fishes2Right.length;
}

function fishFigthNums(left, right, fish) {
  if (right.length) {
    if (fish < 0) {
      while (right.length) {
        const fish2Left = Math.abs(fish);
        const fish2Rigth = right[right.length - 1];
        if (fish2Left > fish2Rigth.size) {
          right.pop();
          continue;
        }
        break;
      }
    } else {
      right.push({ size: fish, direction: "right" });
    }
    if (!right.length) ++left;
  } else {
    if (fish > 0) {
      right.push({ size: fish, direction: "right" });
    } else {
      ++left;
    }
  }
  return [left, right];
}

module.exports = getSurvivorFish;
