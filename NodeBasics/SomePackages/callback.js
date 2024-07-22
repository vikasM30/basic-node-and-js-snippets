
module.exports = () => {

    // simple callback
    const add = (num1, num2, callback) => {
        setTimeout(() => {
            callback(num1+num2)
        }, 1000);
    }
    add(1,3, (sum) => console.log(sum));
    

    // callback with two params
    const compare = (num1, num2, callback) => {
        if(num1>num2){
            callback('Greater is Num1: ' + num1, undefined)
        } else if(num1<num2){
            callback('Greater is Num2: ' + num2, 'Num1 should be greater')
        } else {
            callback('Equal: '+ num1 + '=' + num2, 'Num1 should be greater')
        }
    }

    compare(6,5, (data, warning) => {
        console.log(data, warning)
    })


    // nested callback
    const multiply = (num1, num2) => {
        console.log(num1*num2)
    }
    const add1 = (num1, num2, callback) => {
        setTimeout(() => {
            callback(num1+num2)
        }, 1000);
    }
    add1(2,3, (data) => {
        setTimeout(() => {
            multiply(data, 3)
        }, 1000);
    })
};
