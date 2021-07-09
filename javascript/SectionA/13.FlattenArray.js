function flattenArray(arr, recursive = false) {
  if (!Array.isArray(arr) || typeof recursive != "boolean")
    throw new TypeError("Input a valid array");
  return recursive ? recursiveMode(arr) : iterativeMode(arr);
}

function recursiveMode(arr) {
  let flatten = [];
  for (let i = 0; i < arr.length; ++i) {
    const point = arr[i];
    if (Array.isArray(point)) {
      flatten.push(...recursiveMode(point));
    } else {
      flatten.push(point);
    }
  }
  return flatten;
}

function iterativeMode(arr) {
  let flatten = [],
    index = 0,
    stack = [];
  while (stack.length || index < arr.length) {
    let point;
    if (stack.length) {
      const lastIndex = stack[stack.length - 1].position;
      const subArr = stack[stack.length - 1].value;
      point = subArr[lastIndex];
      if (lastIndex === subArr.length - 1) {
        stack.pop();
      } else {
        stack[stack.length - 1].position += 1;
      }
    } else {
      point = arr[index];
      ++index;
    }
    if (Array.isArray(point)) {
      stack.push({ value: point, position: 0 });
    } else {
      flatten.push(point);
    }
  }
  return flatten;
}

module.exports = flattenArray;
