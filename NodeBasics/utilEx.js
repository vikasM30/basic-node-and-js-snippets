const util = require('util');  

// %s is acting as a placeholder
const string = util.format("Hello %s", "Soshace");
  
// console.log(string);
  
const obj1 = {
  a: 5,
  b: 6,
};
// console.log(util.inspect(obj1));
obj1.self = obj1;
// console.log(util.inspect(obj1));
let a = 'sample'
// console.log(util.inspect(a));
class Sample {
    constructor(_name) {
        this.name = _name
    }
    get getName () {
        return this.name
    }
}
let sampleRef = new Sample('John')
// console.log(util.inspect(sampleRef));
// console.log(util.inspect(sampleRef.getName));
const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

// console.log(util.inspect(obj, { showHidden: true, compact: true, depth: 5, breakLength: 80 }));
 
async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);
 
callbackFunction((err, string) => {
  if (err) {
    // log error
  };
  // do something
  console.log(string);
});
// console.log("2+2 = %d", 4)
// console.table( [{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);