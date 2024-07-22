const _ = require('underscore')

let res = _.contains([1,2,3], 3)
console.log(res)

var arr = [1,2,3,4]

var res2 = _.map(arr, (num) => {
    return num
})
console.log(res2)

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(_.pluck(stooges, 'name'))
var s = []
var kk = stooges.reduce((a,b) => {
    s.push(b.name)
    return s
})
console.log(s, kk)

// (function(){
//   var a = b = 3;
// })();

// console.log(typeof a !== 'undefined');
// console.log(typeof b !== 'undefined');

// var obj = { x : 1}; 		  
// var output = (function() 
// { 
// return obj.x; 
// } 
// )();

// console.log(output);

// function test()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log(test());

