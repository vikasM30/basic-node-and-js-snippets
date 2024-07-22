console.log(
    typeof function () { }, // function
    typeof null,        // "object" (not "null" for legacy reasons)
    typeof undefined,    // "undefined"
    null === undefined,  // false
    null == undefined,  // true
    null === null,     // true
    null == null,      // true
    !null,           // true
    isNaN(1 + null),   // false
    isNaN(1 + undefined), // true
    1 + null,   // 1
    1 + undefined, // NaN
    parseInt("blabla"), // NaN
    parseInt(undefined), // NaN
    Math.sqrt(-1), // NaN
    ('A' / 3), // NaN
    undefined === null, // false
    undefined == null, // true
    isNaN('hello world'),      // true
    Number.isNaN('hello world'), // false
    // isNaN(1n),      // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
    Number.isNaN(1n) // false


)

// do note the difference between isNaN() and Number.isNaN(): 
// the former will return true if the value is currently NaN, or if it is going to be NaN after it is coerced to a number, 
// while the latter will return true only if the value is currently NaN

// bigint value will throw an error with isNaN() and not with `Number.isNaN()

let arr = [2, 4, NaN, 12];
console.log(
    arr.indexOf(NaN),                      // -1 (false)
    arr.includes(NaN),                     // true
    arr.findIndex(n => Number.isNaN(n))
)

let countVal = (str) => {
    let val ={}
    for (const element of str) {
        if (!val[element]) {
            val[element] = 1
        } else {
            val[element]++
        }
    }
    console.log(val)
    return finalC(val)
}
let strObj = countVal('aabbbchh')

function finalC(vv) {
    let maxNum = 0
    let minNum = 1
    let maxChar = ''
    let minChar = ''
    for (const key in vv) {
        if (vv[key] >= maxNum) {
                maxNum = vv[key]
                maxChar = key
        }
        if (vv[key] <=minNum)  {
            minNum = vv[key]
            minChar = key
        }
    }
    return { max: [maxChar, maxNum], min: [minChar, minNum] }
}

console.log(strObj)
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log(reverseEntireSentence)
console.log(reverseEachWord)
