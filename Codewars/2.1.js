/**1 */
/**Printing Array elements with Comma delimiters */
/**Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a" */

array = ["h", "o", "l", "a"];
console.log(array.join(','));
array = [2, 4, 6, 8];
console.log(array.join(','));


/*2 */
/*Opposite number */
/*given a number, find its opposite. */
function opposite(number) {
    //your code here
    return number * -1;
  }


/**3 */
/**Basic Mathematical Operations */
/**Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */
/**Examples(Operator, value1, value2) --> output */

function basicOp(operation, value1, value2) {
    // Code
    switch (operation) {
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;

        case '*':
            return value1 * value2;
            break;
        case '/':
            return value1 / value2;
            break;
        default:
            break;
    }
}
//return eval(value1 + operation + value2);
console.log(basicOp('/', 4, 7));

/*4 */
/** Transportation on vacation*/
/**After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d). */

function rentalCarCost(d) {
  // Your solution here
 
  var totalAmount = d * 40;
  if(d>=7){
    return totalAmount - 50;
  }
  else if(d>=3){
    return totalAmount - 20;
  }
  return totalAmount;
}
  console.log(rentalCarCost(3));