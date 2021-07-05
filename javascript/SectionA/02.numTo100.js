function numTo100(step = 1) {
  try {
    console.log(step);
    1 / (100 - step);
    numTo100(step + 1);
  } catch (error) {
    return;
  }
}

module.exports = numTo100;
