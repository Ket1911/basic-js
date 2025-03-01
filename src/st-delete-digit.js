import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {

  let str = n.toString();
  let result = 0;
  for (let i = 0;  i < str.length; i++) {
    if (+(str.substring(0, i) + str.substring(i + 1, str.length)) > result) {
      result = +(str.substring(0, i) + str.substring(i + 1, str.length))
    }
  }
  return result
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
