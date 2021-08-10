let acc = 0;

function print() {
  console.log(++acc);
}

function dotwice(fn) {
  return function twice() {
    fn();
    fn();
  };
}

const print2 = dotwice(print),
  print4 = dotwice(print2),
  print8 = dotwice(print4),
  print16 = dotwice(print8),
  print32 = dotwice(print16),
  print64 = dotwice(print32);

function numTo100(i = 0) {
  print64();
  print32();
  print4();
}

module.exports = numTo100;
