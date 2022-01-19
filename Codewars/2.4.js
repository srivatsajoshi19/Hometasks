/**1 */
/**Using closures to share class state */
/**https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript */

// Let's make a Cat constructor!
var Cat = (function () {
  const cats = [];

  const constructor = function (name, weight) {
    if (name === undefined || weight === undefined)
      throw Error("Missing parameters");
    Object.defineProperty(this, "name", { get: () => name });
    Object.defineProperty(this, "weight", {
      get: () => weight,
      set: (value) => (weight = value),
    });
    cats.push(this);
  };

  constructor.avgWeight = () => {
    cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length;
  };
  return constructor;
})();

/**2 */
/** https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript*/

function add(n){  
  const fn = (x) => add(n + x);
  fn.valueOf = () => n;
  
  return fn;
}
/**3 */
/**https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript */
function cache(func) {
  // do your magic here
   var storage = {};
  return function() {
    var keyMemoized = JSON.stringify(arguments);
    return keyMemoized in storage ? storage[keyMemoized] : storage[keyMemoized] = func.apply(this, arguments);
  };
}




/**4 */
/**https://www.codewars.com/kata/5421c6a2dda52688f6000af8/train/javascript*/
function compose(f,g) {
  // Compose the two functions here!
 return c  = (...values)=>{
   return f(g(...values));
 }
}

/**5 */
/*https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript */

function compose(...fn) {
  // Your solution
  return (value)=>{
    return fn.reduceRight((acc, curr)=>{
      return curr(acc);
    },value);
  } 
  
}