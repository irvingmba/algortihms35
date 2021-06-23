function greatestArea(areaSet = []) {
  if (!areaSet || !Array.isArray(areaSet))
    throw new TypeError("Input a 2d array");
  let greatest = 0;
  areaSet.reduce((acc, row) => {
    const fused = fuseRows(acc, row);
    const found = getArea(fused);
    if (greatest < found) greatest = found;
    return fused;
  }, []);
  return greatest;
}

function getArea(row) {
  let area = 0;
  const areas = new Map();
  row.map((col) => {
    if (col) {
      if (areas.size === 0) {
        areas.set(col, 1);
        area = col;
        return col;
      }
      if (areas.has(col)) {
        areas.forEach((value, key) => {
          if (col >= key) {
            area = area < (value + 1) * key ? (value + 1) * key : area;
            return areas.set(key, value + 1);
          } else if (area < value * key) {
            area = value * key;
          }
          areas.delete(key);
        });
      } else {
        let largest = 0;
        areas.forEach((value, key) => {
          if (col >= key) {
            area = area < (value + 1) * key ? (value + 1) * key : area;
            return areas.set(key, value + 1);
          } else if (area < value * key) {
            area = value * key;
          }
          if (value > largest) largest = value;
          areas.delete(key);
        });
        areas.set(col, largest + 1);
        area = area < (largest + 1) * col ? (largest + 1) * col : area;
      }
    } else {
      areas.clear();
    }
  });
  return area;
}

function fuseRows(stored, row) {
  return row.map((col, colIndex) => {
    if (col) return stored[colIndex] ? stored[colIndex] + col : col;
    else return 0;
  });
}

module.exports = greatestArea;
