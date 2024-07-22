const str = "a b c c d e f i a m a e i o u"
let counts = {};
// str.split(" ").forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
str.split(" ").map(function(x) { return counts[x] = (counts[x] || 0)+1; });

console.log(counts)

let letscheck = str.split(" ").reduce((acc, val) => {
    if (val in acc) {
        acc[val]++
    } else {
        acc[val] = 1
    }
    return acc
},{})
console.log(letscheck)

let dup = "vikas is a vikas mishra hello vikas"
let filDup = dup.split(" ").reduce((acc, val) => {
    if (acc.indexOf(val) == -1) {
        acc.push(val)
    }
    return acc
}, [])
console.log(filDup)
// var x = 21;
//  var abc = function () {
//     console.log(x);
//     var x = 20;
//  };
//  abc ();

// function sum(a,b){
//     var sumInternal = function (b){return a+b;};
//     if(typeof b =='undefined'){
//         return sumInternal;
//     }else{
//         return sumInternal(b);
//     }
// }

// console.log(sum(2)(2), sum(2,3))
console.log(typeof Symbol('%'))
let arr = [4,3,3,1]
let resArr= arr.reduce((acc, val) => {
    if (acc.indexOf(val) == -1) {
        acc.push(val)
    }
    return acc
}, [])
console.log(resArr)