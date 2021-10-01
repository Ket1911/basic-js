import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {

  if (typeof options.separator == "undefined") {
    options.separator = '+';
  }
  
  if (typeof options.additionSeparator == "undefined") {
    options.additionSeparator = '|';
  }
  
  if (typeof options.additionSeparator == "undefined") {
    options.additionSeparator = '|';
  }
  
  if (typeof options.repeatTimes == "undefined") {
    options.repeatTimes = 1;
  }
  
  if (typeof options.additionRepeatTimes == "undefined") {
    options.additionRepeatTimes = 1;
  }

  if (typeof options.addition == "undefined") {
    options.addition = '';
  }
  
  // console.log(options);
  
  let res = '';
  
  for (let i = 1; i <= options.repeatTimes; i++) {
    res = res + str;
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      res = res + options.addition;
      if (j < options.additionRepeatTimes) {
      res = res + options.additionSeparator;
    }
    }
    
    if (i < options.repeatTimes) {
      res = res + options.separator;
    }
  }
  
  return res;



  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
