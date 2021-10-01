import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  const obj = {};
  let arr = [];
  
  for (let i = 0; i < domains.length; i++) {
    let word = '';
    let fw = domains[i];
    let prew = fw.length;
    
    for (let j = fw.length - 1 ; j >= 0; j--) {
      
      if (fw[j] === '.') {
       
        word = word + fw.substring(j, prew);
        prew = j
        
      }
      
    }
    
    word = word + '.' + fw.substring(0, prew);
    
    arr.push(word);
    
    for (let x = 1; x < word.length; x++) {
      if (word[x] === '.') {
        arr.push(word.substring(0, x));
      }
    } 
   
    
  }
  
  
 function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
  
  let w = unique(arr).sort();
  console.log(arr);
  
  
  for (let x = 0; x < w.length; x++) {
    let count = 0;
    for (let y = 0; y < arr.length; y++) {
      if (w[x] === arr[y]) {
        count++
      }
      
    }
    obj[w[x]] = count;
  }
 
  return obj
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
