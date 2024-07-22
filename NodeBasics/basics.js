const assert = require('assert').strict

assert.deepStrictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5])

var t;
setInterval(function() { t = console.log("setInterval: It's been one second!"); }, 1000);
// setTimeout(() => {
//     t = console.log("asdcfad")
// }, 2000);


function mul(val, pow){
    return pow == 1 ? val : val * mul(val, pow -1)
}
var factorial = (val) => { return val <= 0 ? 1 : val * factorial(val - 1) }
var sum = (val) => { return val == 0 ? 0 : val + sum(val - 1) }
var sumSqRecur = (val) => { return val == 0 ? 0 : (val * val) + sumSqRecur(val - 1) }
var sumSqFormula = (n) => { return (n * (n + 1) * ((2 * n) + 1))/6 }
var fib = (val) => { return val <= 1  ? val : fib( val - 1) + fib(val - 2) }

// console.log('n power to m', mul(100,2))
// console.log('factorial', factorial(5))
// console.log('sum of n natural number', sum(5))
// console.log('sum of square of n natural number (Recursion)', sumSqRecur(5))
// console.log('sum of square of n natural number (Formula)', sumSqFormula(5))
// console.log('Fibonacci series sum', fib(5))

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {

    console.log(list.value); // output the current item
  
    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }
    clearTimeout(t)
  }
  
  printList(list);