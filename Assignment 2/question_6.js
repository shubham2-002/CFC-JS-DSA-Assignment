
const prompt = require('prompt-sync')();

function GCD(num1, num2) {
    while (num1 != num2) {
        if (num1 > num2) {
            num1 = num1 - num2;
        }
        else if (num2>num1){
            num2 = num2 - num1;
        }
    }
    return  "GCD is " +num1
}
const n1 = Number(prompt("Enter the num1: "))
const n2 = Number(prompt("Enter the num2: "))

console.log(GCD(n1,n2));