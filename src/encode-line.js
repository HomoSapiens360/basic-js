const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (str.length === 0) return '';

  const arr1 = str.split('');
  let result = '';

  for (let i = 0; i < arr1.length; i++) {
    let j = i;
    let count = 0;
    const curr = arr1[i];
    while (curr === arr1[j]) {
      count++;
      i = j;
      j++;
    }

    result += count === 1 ? curr : count + curr;
  }


  return result;
}

module.exports = {
  encodeLine
};
