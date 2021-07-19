function numTo100(step = 1) {
  console.log(step);
  return step < 100 && numTo100(step + 1);
}

module.exports = numTo100;
