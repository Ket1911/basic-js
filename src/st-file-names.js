import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let arr = [];
  let arr2 = [];
  
  for (let i = 0; i < names.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === names[i]) {
        counter++;
      }
    }
    
    
    arr.push(names[i]);
    if (counter === 0 && arr2.includes(names[i])) {
      arr2.push(`${names[i]}(1)`)
    } else if (counter === 0) {
      arr2.push(names[i]);
    } else {
      arr2.push(`${names[i]}(${counter})`)
    }
  }
  return arr2
}
