import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {

  chain: '',

  getLength() {

    //return this.chain.split(' )~~( ').length;
    
  },

  addLink(value) {
    
    
    if (this.chain.length === 0) {
      this.chain = `( ${value} )`;
    } else {
      this.chain = `${this.chain}~~( ${value} )`;
    }
    
    return this

  },


  removeLink(position) {
    if (typeof position != 'number' || position < 1) {
      this.chain = '';
      throw new Error ("You can\'t remove incorrect link!");
    }
    let arr = this.chain.split('~~');

    if (position > arr.length) {
      this.chain = '';
      throw new Error ("You can\'t remove incorrect link!");
    }

    arr.splice(position - 1 , 1);
    this.chain = arr.join('~~')
    return this

  },
  reverseChain() {
    let arr = this.chain.split("~~").reverse();
    
    this.chain = arr.join("~~");
    return this

  },

  finishChain() {

    let res = this.chain;
      this.chain = "";
      return res;

  }
  
};
