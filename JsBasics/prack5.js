
// function User(name){
// this.name = name;
// }

// // OR

// // class User{
// //     constructor(_name) {
// //         this.name = _name;
// //     }
// // }

// User.prototype.hello = function(who){
// console.log("Hello, " + who.name);
// };

// var tim = new User("Tim");
// var tom = new User("Tom");
// console.log(tim)
// tim.hello(tom)
// module.exports = User
// console.log('Parent', module)

function checkStockProfit(arr) { 
    let val = arr[0]
    let profit = 0
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > val) {
            profit = Math.max(profit, arr[i] - val)
        } else {
            val = arr[i]
        }
    }
    console.log(profit)
}

let Ar = [4,10, 2 ,4, 6 ,3 , 8, 9, 1, 3, 6]
checkStockProfit(Ar)