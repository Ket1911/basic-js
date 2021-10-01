import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let result = '';
   let counter = 0;
  
  
  for (let i = 0; i < str.length; i++) {
   if (str[i] !== str[i+1]) {
     str = str.substring(0, i) + str[i] + '|' + str.substring(i+1);
     i++;
   }
  }
    console.log(str)
  
  let prev = 0;
  
  for (let i = 0; i < str.length; i++) {
     
    if (str[i] === '|') {
      if (counter === 1) {
        result = result  + str[i-1];
      } else {
        result = result + counter + str[i-1];
      }
      
      counter = 0;
    } else counter++
  }
    
  
  return result

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
