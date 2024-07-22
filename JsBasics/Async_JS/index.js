// console.log('Brfore')
// const user = getUser(1)
// console.log(user)
// console.log('After')

// function getUser(id) {
//     setTimeout(() => {
//         console.log('Reading a user from a database...')
//         return { id: id, name: 'vikas'}
//     }, 1000);
// }

// console.log('abcdes'.charAt(4))
// console.log([1,2,3,4,5,6,7].concat(4))
// console.log('abcdes'.concat(4))
// console.log(1+2+ 'as' + 4 +5)
// console.log('abcdefghijklmnopqrstuvwxyz'.indexOf('f'))

let obj = {
    a: 1,
    b: 2
}

for (const key in obj) {
    console.log(key)
}

for (const key of Object.keys(obj)) {
    console.log(key)
}

var a = 10
function foo(){
console.log(a, !a, typeof a)
if(!a) var a= 20
console.log(a)
}
foo()