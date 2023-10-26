const { addSum,giveLengthOfString,name } = require('./sumFunction');


// console.log(addSum(1,8))
// console.log(giveLengthOfString("Chandu"))


// closures

function x (x) {
    console.log("Fun X called")
}

function y (callback) {
    console.log("Fun Y called")
    let a = 100
    function x (x) {
        console.log("Fun X called")
        console.log(a)
    }
    return x
}

const closuresFunction = y()
console.log(closuresFunction())
console.log(name)










