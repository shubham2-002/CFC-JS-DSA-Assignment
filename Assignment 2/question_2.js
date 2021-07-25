const prompt = require('prompt-sync')();
function calculate(n1, n2, ch) {

    if (ch == "*") {
        return (n1 * n2)
    }
    else if (ch == "/") {
        return (n1 / n2);
    }
    else if (ch == "%") {
        return (n1 % n2)
    }
    else if (ch == "+") {
        return (n2 + n1);
    }
    else if (ch == "-") {
        return (n1 - n2);
    }
    else{
        return "Enter valid operator!"
    }
}
const num1 = Number(prompt("Enter num1 "))
const num2 = Number(prompt("Enter num2 "))
const char = prompt("Enter char ")

console.log(calculate(num1, num2, char))



