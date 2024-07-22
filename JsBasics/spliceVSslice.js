var a = [1,2,3,4,5]
var k = a.slice(2)  // returns a new array
console.log(a,k)
var kk = k.splice(0,1, 1,2) // returns deleted element and operates on same array
// splice(startIndex, how man to delete, elements to insert)
console.log(a,k, kk)