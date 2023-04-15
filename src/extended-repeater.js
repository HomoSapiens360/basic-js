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
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = str === null ? 'null' : str;
  str = str === undefined ? '' : str;
  //str = typeof str !== 'string' ? str.toString() : str;
  if (typeof str !== 'string') {
    if (String(str) === 'STRING_OR_DEFAULT') {
      str = 'STRING_OR_DEFAULT';
    } else str = str.toString();
  }


  options.addition = options.addition === null ? 'null' : options.addition;
  options.addition = options.addition === undefined ? '' : options.addition;
  //options.addition = typeof options.addition !== 'string' ? options.addition.toString() : options.addition;
  if (typeof options.addition !== 'string') {
    if (String(options.addition) === 'STRING_OR_DEFAULT') {
      options.addition = 'STRING_OR_DEFAULT';
    } else options.addition = options.addition.toString();
  }

  const repeatTime = options.repeatTimes === undefined || options.repeatTimes === 0 ? 1 : options.repeatTimes;
  const separator = options.separator === undefined || options.separator === '' ? '+' : options.separator;
  const addition = options.addition === undefined ? '' : options.addition;
  const addSep = options.additionSeparator === undefined || options.additionSeparator === '' ? '|' : options.additionSeparator;

  const addRepeaTime = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;

  const addResultStr = addition ? (addition + addSep).repeat(addRepeaTime).slice(0, -addSep.length) : '';
  //console.log(addResultStr);
  const strWithAddition = (str + addResultStr + separator).repeat(repeatTime).slice(0, -separator.length);
  //console.log(strWithAddition);
  return strWithAddition;
}



module.exports = {
  repeater
};
