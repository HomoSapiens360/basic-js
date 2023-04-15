const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  if (domains.length === 0) return {};

  const obj = {};

  const arrReversed = domains
    .sort((a, b) => b.length - a.length)
    .map(el => el.split('.').reverse().join('.'));

  const subDomains = arrReversed.map(el => {
    return el.split('.').map((item, ind, arr) => {
      let subStr = '';
      for (let i = 0; i <= ind; i++) {
        subStr += `.${arr[i]}`;
      }
      return subStr;
    })
  }).reduce((acc, it) => acc.concat(it)).forEach(it => {
    if (obj[it] !== undefined) {
      obj[it]++;
    } else obj[it] = 1;
  });

  return obj;
}

module.exports = {
  getDNSStats
};
