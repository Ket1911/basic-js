import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let c =0;
  if (n.length !== 17) {
    return false
  }
  
  
  for (let i = 0; i < n.length; i = i+1) {
    if (n[i] !== '-') {
      c = n.charCodeAt(i);
      
    }
    // console.log(c)
    
    if (!(c >= 48 && c <= 57 || c >= 65 && c <= 70)) {
      return false 
    }
  }
  
  return true
}