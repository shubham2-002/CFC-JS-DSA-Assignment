const prompt = require('prompt-sync')()

function SumPair(arr, target) {
    let pairsum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                pairsum.push("(" + arr[i], arr[j] + ")")
            }
        }
    }
    return pairsum + "";
}
// arr = [3, 1, 11, 2, 9, 7, 4, 5, -1, 13, 6, 4]
// target = 5;
let arr = []
const size = prompt("Enter size of arry: ")
const target = prompt("Enter size of target: ")

for(let i = 0;i<size;i++){
     arr[i] = Number(prompt("Enter element No "+(i+1)+": "))
}

console.log(SumPair(arr, target));