const prompt = require('prompt-sync')();

function AlphabetCheck(char){
    if(char.charCodeAt(0)>=65&&char.charCodeAt(0)<=90){
        return "It Uppercase"
    }
    else if(char.charCodeAt(0)>=97&&char.charCodeAt(0)<=122){
        return "It is Lowercase"
    }
}

const ch = prompt("Enter any Alphabate: ")

console.log(AlphabetCheck(ch));