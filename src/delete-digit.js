const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (!n || String(n).length === 1) return 0;
  const result = [];
  const nArr = String(n).split('');
  for (let i = 0; i < nArr.length; i++) {
    result.push(Number(nArr.map((el, ind, arr) => ind !== i ? el : null).join('')));
  }
  return Math.max(...result);

}

module.exports = {
  deleteDigit
};
