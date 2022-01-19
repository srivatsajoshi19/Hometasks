 /**1 */
 /**https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript */

 Array.prototype.square = function(){
    return this.map((item)=> item * item);
  }
  
  Array.prototype.cube = function(){
    return this.map((item)=> item * item * item);
  }
  
  Array.prototype.sum = function(){
    return this.reduce((a,b)=> a+b, 0);
  }
  
  Array.prototype.average = function(){
    return this.sum()/this.length;
  }
  
  Array.prototype.even = function(){
    return this.filter((item)=> item%2===0);
  }
  Array.prototype.odd = function(){
    return this.filter((item)=> item%2!==0);
  }
  
  /*2*/
  /**https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript */

  Object.prototype.hash = function(string) {
    try{
      return eval(`this.${string}`);
    }
    catch(e){
      return undefined;
    }
  }
  /**3 */
  /**https://www.codewars.com/kata/53c7da8baf72924af8000405/train/javascript */
  function construct(Class, ...args) {
    var obj = Object.create(Class.prototype);
    Class.apply(obj, Array.prototype.slice.call(arguments, 1));
    return obj;
  }


  /**4 */
  /**https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript */

  function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(item){
      return typeof obj[item] == 'function';
    });
  }
  