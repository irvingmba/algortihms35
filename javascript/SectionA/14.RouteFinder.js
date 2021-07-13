const isMatrix = require("../utils/isMatrix");

function routeFinder(matrix, start, end) {
  if (
    (!isMatrix(matrix) && !Array.isArray(start), !Array.isArray(end)) &&
    !isValidPoint(matrix, start, end)
  )
    throw new TypeError("Input a valid 2D matrix and 2 valid points within it");
    if(hasRoutes(start, end)){
        return traverseRoutes(start, end);
    } else {
        return [];
    };
}

function isValidPoint(matrix, start, end) {
  const [stx, sty] = start,
    [endx, endy] = end;
  return (
    stx < matrix[0].length &&
    endx < matrix[0].length &&
    sty < matrix.length &&
    endy < matrix.length &&
    stx > -1 &&
    sty > -1 &&
    endx > -1 &&
    endy > -1
  );
}

function hasRoutes(point, end) {
  const [pointX, pointY] = point,
    [endX, endY] = end;
  return (
    !(pointX === endX && pointY === endY) && pointX <= endX && pointY <= endY
  );
}

function traverseRoutes(point, end, acc=[]){
    const [pointX, pointY] = point,
    [endX, endY] = end;
    if(pointX === endX && pointY === endY) return [acc];
    const routes = [];
    const rigth = pointX < endX ? traverseRoutes([pointX+1, pointY], end, [...acc, "r"]) : null;
    const down = pointY < endY ? traverseRoutes([pointX, pointY+1], end, [...acc, "d"]) : null;
    if(rigth && rigth.length) routes.push(...rigth);
    if(down && down.length) routes.push(...down);
    return routes
};

module.exports = routeFinder;
