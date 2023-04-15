const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (matrix === undefined || matrix.length === 0) return 0;

  return matrix
    .map(item => {
      const res = item.filter(elem => {
        //console.log(`elem: ${elem}`);
        return elem === '^^'
      }).length;

      //console.log(`res: ${res} ============================`);
      return res;
    })
    .reduce((acc, it) => acc + it);
}

module.exports = {
  countCats
};
