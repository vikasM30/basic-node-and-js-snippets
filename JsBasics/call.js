console.log([1, 2, 3, 4, 5].map(function (n) { return (n < 1) ? 1 : arguments.callee(n - 1) * n }))
console.log([1, 2, 3, 4, 5].map(function fact(n) { return (n < 1) ? 1 : fact(n - 1) * n }))

// call() method allows an object to use the method (function) of another object.
// 1
let person = { age: 56, getAge: function () { return this.age } }
let person2 = { age: 26 }
console.log(person.getAge.call(person2))

// 2
function saySomething(message) { return this.name + " is " + message; }
let person3 = { name: "John" };
console.log(saySomething.call(person3, "awesome"))

// 3 here The call() method calls a function with a given this value and arguments provided individually
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
let foodObj = new Food('cheese', 5)
console.log(foodObj.name);

// 4 we create an anonymous function and use call to invoke it on every object in an array.
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species
                + ': ' + this.name, animals[i]);
        }
        this.print();
    }).call(animals[i], i);
}

