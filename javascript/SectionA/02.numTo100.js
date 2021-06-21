function numTo100() {
  const numbers = new Array(100).fill(1);
  numbers.reduce((acc, val) => {
    const res = acc + val;
    console.log(res);
    return res;
  }, 0);
}

module.exports = numTo100;