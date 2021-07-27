function getSurvivorFish(fishes) {
  if (!Array.isArray(fishes)) throw new TypeError("You must input an array");
  let fishes2Rigth = [],
    fishes2Left = 0;
  for (const fish of fishes) {
    if (fishes2Rigth.length) {
      if (fish.direction === "left") {
        while (fishes2Rigth.length) {
          const fish2Rigth = fishes2Rigth[fishes2Rigth.length - 1];
          if (fish.size > fish2Rigth.size) {
            fishes2Rigth.pop();
            continue;
          }
          break;
        }
      } else {
        fishes2Rigth.push(fish);
      }
      if (!fishes2Rigth.length) ++fishes2Left;
    } else {
      if (fish.direction === "rigth") {
        fishes2Rigth.push(fish);
      } else {
        ++fishes2Left;
      }
    }
  }
  return fishes2Left + fishes2Rigth.length;
}

module.exports = getSurvivorFish;
