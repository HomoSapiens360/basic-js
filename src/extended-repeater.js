const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*
  const repeatTime = options.repeatTime === undefined || options.repeatTime === 0 ? 1 : options.repeatTime;
  const separator = options.separator === undefined || options.separator === '' ? '+' : options.separator;
  const addition = options.addition === undefined ? '' : options.addition;
  const addsep = options.additionSeparator === undefined || options.additionSeparator === '' ? '+' : options.additionSeparator;

  const strWithAddition = str + addition
*/
}

module.exports = {
  repeater
};
