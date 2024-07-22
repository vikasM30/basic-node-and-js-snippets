// 1 call() method takes arguments separately whereas, apply() method takes arguments as an array.
function saySomething(message) {
    console.log(this.name, message)
}
let nameObj = {name: 'saml'}
saySomething.apply(nameObj, ['awesome'])

// 2  if the method is a function in non-strict mode code, null and undefined will be replaced with the global object
const numbers = [5, 6, 2, 3, 7];
console.log(Math.max.apply(this || null, numbers))
// allows an iterable such as an array expression or string to be expanded in places where zero or 
// more arguments (for function calls) or elements (for array literals) are expected
console.log(Math.max(...numbers))
console.log(...numbers)

// 3 append one array to another
let array = ['a', 'b'];
let elements = [0, 1, 2];
array.push.apply(array, elements)
// array = [...array, ...elements]
console.log(array)

// 4
function MyConstructor() {
    for (let nProp = 0; nProp < arguments.length; nProp++) {
      this['property' + nProp] = arguments[nProp];
    }
  }
  
  let myArray = [4, 'Hello world!', false];
  let myInstance = MyConstructor.construct(myArray);
  
  console.log(myInstance.property1);                // logs 'Hello world!'
  console.log(myInstance instanceof MyConstructor); // logs 'true'
  console.log(myInstance.constructor);              // logs 'MyConstructor'