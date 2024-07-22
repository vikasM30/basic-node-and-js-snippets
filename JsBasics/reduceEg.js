var numbers = [1, 2, 3, 4, 5],
tasks = [{
    'name': 'Write for Envato Tuts+',
    'duration': 120
},
{
    'name': 'Work out',
    'duration': 60
},
{
    'name': 'Procrastinate on Duolingo',
    'duration': 240
}
];
total = 0;
     
numbers.forEach(function (number) {
    total += number;
});
// console.log('forEach: ', total)
var str ="12345"
var total = str.split("").reduce(function (previous, current) {
    return parseInt(previous) + parseInt(current);
}, 0);
console.log('reduce: ', total)

var total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
    return previous + current;
}, 0);
 
console.log("final value is " + total + ".");

var totalTaskTime = tasks.reduce((a, b) => {
    return a + b.duration
}, 0)
console.log(totalTaskTime)

var concatenated = [
    [1, 3, 5, 6],
    [5],
    [8, 7]
].reduceRight( function (previous, current) {
    return previous.concat(current);
});

console.log('reduceRight: ', concatenated);

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

let groupByAge = people.reduce((acc, val) => {
    let obj = val['age']
    if (!acc[obj]) {
        acc[obj] = []
    }
    acc[obj].push(val)
    return acc
}, {})
console.log(groupByAge)

let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]

let allBooks = friends.reduce((acc, val) => {
    return [...acc, ...val.books]
}, ['faltu me'])

console.log(allBooks)