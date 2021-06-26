function groupOnes(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0]))
    throw new TypeError("You must input a 2D matrix");
  let last = 0;
  let leftChanges = null;
  matrix.reduce((prev, row) => {
    const { fused, lastUsed, changes } = fuseGroups(prev, row, leftChanges, last);
    last = lastUsed;
    leftChanges = changes;
    return fused;
  }, []);
  return last-leftChanges.size;
}

function fuseGroups(prevTop, row, prevChanges, last = 0) {
  let lastUsed = last;
  const changes = prevChanges || new Map();
  const fused = row.reduce((acc, col, i) => {
    if(col){
      const topCol = changes.has(prevTop[i])
          ? changes.get(prevTop[i])
          : prevTop[i],
        leftCol = !acc.length
          ? null
          : changes.has(acc[acc.length - 1])
          ? changes.get(acc[acc.length - 1])
          : acc[acc.length - 1];
      switch (true) {
        case Boolean(!topCol && !leftCol): {
          return [...acc, ++lastUsed];
        }
        case Boolean(topCol && !leftCol): {
          return [...acc, topCol];
        }
        case Boolean(!topCol && leftCol): {
          return [...acc, leftCol];
        }
        case Boolean(topCol && leftCol): {
          const min = Math.min(topCol, leftCol);
          if (topCol != leftCol) changes.set(Math.max(topCol, leftCol), min);
          return [...acc, min];
        }
        default:
          return [...acc, col];
      }
    } 
    return [...acc, col];
  }, []);
  return { fused, lastUsed, changes };
}

module.exports = groupOnes;
