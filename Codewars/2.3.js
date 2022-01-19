/**1 */
/*Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop*/
/**You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function. */

function prefill(n, v) {
  
    const len = parseInt(n);
    if(isNaN(len) || n % 1 !== 0 || len < 0){
      throw new TypeError(`${n} is invalid`);
    }
    if(len === 0) return [];
    
    return new Array(len).fill(v);
  }


  /**2 */
  /** */
  /**Given an input n, write a function always that returns a function which returns n */

  function always (n) {
    return function(){
      return n;
    }
}

/**3 */
/**We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example: */
/**
 * var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3 */

function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  return callbacks;
}
/**4 */
/**Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2 */

function createSecretHolder(secret) {
  let newObj = {};
  newObj.getSecret = function(){
    return secret;
  }
  newObj.setSecret = function(sec){
    secret = sec;
  }
  return newObj;
}
const obj = createSecretHolder(5);
console.log(obj.getSecret());
obj.setSecret(2);
console.log(obj.getSecret());
