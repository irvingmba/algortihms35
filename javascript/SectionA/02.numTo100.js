function numTo100(step = 1) {
  console.log(step);
  return 100 - step ? numTo100(step + 1) : null;
}

module.exports = numTo100;
