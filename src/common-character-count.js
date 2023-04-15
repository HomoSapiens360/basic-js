const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }

  return Array.from(new Set(s1))
    .map((elem) => {
      s1Count = s1.split('').filter((el) => el === elem).length;
      s2Count = s2.split('').filter((el) => el === elem).length;
      return Math.min(s1Count, s2Count);
    }).reduce((accum, item) => accum + item);
}

module.exports = {
  getCommonCharacterCount
};
