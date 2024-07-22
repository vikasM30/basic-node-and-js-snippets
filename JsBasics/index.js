for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {

        document.write('*');
    }
    document.write('<br />');
}

var x = 5;
document.write('<h3>' + x + '</h3>');

var x = 21;
document.write(x);
var abc = function abc() {
    document.write(x);
    var x = 20;
};
document.write(x);
abc();

var arr = [1, 2, 3, 6, 3]
// function getSum(total, num) {    
//     return total + Math.round(num);
//   }
// arr = [...new Set(arr)];
arr = arr.filter((val, index) => {
    return arr.indexOf(val) === index
})
var k = arr.reduce((total, num) => {
    return total + num;
}, 0)
document.write('<h3>' + 'Sum is: ' + k + '</h3>')
for (const x of arr) {
    document.write('<h3>' + x + '</h3>')
}

var total = [3, 2, 1, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);
console.log('reduce: ', total)