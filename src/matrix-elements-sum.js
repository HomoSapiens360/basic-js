const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let zeroIndexesArr = new Array(matrix[0].length);

  return matrix.map((subArr, i, thisArr) => {
    if (i === 0) {
      zeroIndexesArr = subArr.slice(0);
      return subArr.reduce((acc, it) => acc + it);
    }
    return subArr.map((item, ind, arr) => {
      const zeroVal = zeroIndexesArr[ind];
      if (item === 0) zeroIndexesArr[ind] = 0;
      if (zeroVal === 0) {
        return 0;
      } else return item;
    }).reduce((acc, it) => acc + it)

  }).reduce((acc, it) => acc + it);


}

module.exports = {
  getMatrixElementsSum
};
