import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error ('\'arr\' parameter must be an instance of the Array!');
    
  }
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next' && arr[i+2] == '--double-prev' || arr[i] == '--discard-next' && arr[i+2] == '--discard-prev') {
      i = i + 2;
    } else if (arr[i] == `--discard-next`)  {
      if (arr.length > i+1) {
        i++;
      }
    } else if (arr[i] == `--discard-prev`) {
      if (newArr.length > 0) {
        newArr.pop();
      }
    } else if (arr[i] == `--double-next`) {
      if (arr.length > i+1) {
        newArr.push(arr[i+1]);
      } 
    } else if (arr[i] == `--double-prev`) {
      if (newArr.length > 0) {
        newArr.push(arr[i-1]);
      }
    }  else {
      newArr.push(arr[i]);
    }
  }

return newArr;
}
