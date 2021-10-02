import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(bul) {
    this.bul = bul;
  }

  encrypt(message, key) {

if  (arguments.length != 2 || message == undefined || key == undefined){
  throw new Error ('Incorrect arguments!');
}
 

    message = message.toUpperCase();
    key = key.toUpperCase();
    console.log(key);
    
      
      let kf = Math.ceil(message.length / key.length);
      key = key.repeat(kf);

      for (let i = 0; i < message.length; i++) {
        if(message[i] === ' ') {
          key = key.substring(0, i) + ' ' + key.substring(i)
        }
      }
    
  
    let codeA = 'A'.charCodeAt(0);
    
    let abcCount = 26;
  
    let result = [];
  
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        result.push(message[i]);
      } else if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 122 || message.charCodeAt(i) > 90  && message.charCodeAt(i) < 97) {
          result.push(message[i]);       
      } else {
        let letterIdx = message.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
  
        result.push(
          String.fromCharCode( codeA + (letterIdx + shift) % abcCount )
        );
      }
    }

    if (this.bul == false) {
      return result.reverse().join("");
      
    } else {
      return result.join('');
    }
  
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message, key) {

    if  (arguments.length != 2 || message == undefined || key == undefined){
      throw new Error ('Incorrect arguments!');
    }

    message = message.toUpperCase();
  key = key.toUpperCase();
  console.log(key);
  
    
    let kf = Math.ceil(message.length / key.length);
    key = key.repeat(kf);
  
  for (let i = 0; i < message.length; i++) {
    if(message[i] === ' ') {
      key = key.substring(0, i) + ' ' + key.substring(i)
    }
  }
  

  let codeA = 'A'.charCodeAt(0);
  
  let abcCount = 26;

  let result = [];
  
  

  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      result.push(message[i]);
    } else if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 122 || message.charCodeAt(i) > 90  && message.charCodeAt(i) < 97) {
        result.push(message[i]);       
    } else {
      let letterIdx = message.charCodeAt(i) - codeA;
      let shift = key.charCodeAt(i) - codeA;

      result.push(
         String.fromCharCode( codeA + (letterIdx - shift + abcCount) % abcCount )
      );
    }
  }

  if (this.bul == false) {
    return result.reverse().join("");
    
  } else {
    return result.join('');
  }

  
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}