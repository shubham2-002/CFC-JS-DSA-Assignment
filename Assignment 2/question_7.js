const prompt = require('prompt-sync')()

// let n1 = 15
// let n2 = 25
function LCM(n1, n2) {
    for (let value = n1; value < n1 * n2; value++) {
        if (value % n1 == 0 && value % n2 == 0) {
            return value
        }
    }
}
const num1 = prompt("Enter num1: ")
const num2 = prompt("Enter num2: ")

console.log(LCM(num1,num2))