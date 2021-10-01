import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  console.log(matrix[1])
  let result = [];
  let arr =[];
  for (let x = 0; x < matrix.length; x++) {
    let arr = [];
    for (let y = 0; y < matrix[x].length; y++) {
      let counter = 0;
      
      
      if (matrix[x-1] !== undefined) {
        
        if (matrix[x-1][y-1] === true) {
          counter++
        }
        if (matrix[x-1][y] === true) {
          counter++
        }
        if (matrix[x-1][y + 1] === true) {
          counter++
        }
        
      }
      
      if (matrix[x+1] !== undefined) {
        
        if (matrix[x+1][y-1] === true) {
          counter++
        }
        if (matrix[x+1][y] === true) {
          counter++
        }
        if (matrix[x+1][y + 1] === true) {
          counter++
        }
        
      }
      
      if (matrix[x][y-1] === true) {
          counter++
      }
      if (matrix[x][y+1] === true) {
          counter++
      }
      
      arr.push(counter)
      
    }
    
    result.push(arr);
    
  }
  
  return result
  
}