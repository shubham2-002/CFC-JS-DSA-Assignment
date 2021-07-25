const prompt = require('prompt-sync')()

function SumPair(arr, target) {
    let pairsum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j]+arr[k]== target) {
                    pairsum.push("(" + arr[i], arr[j] ,arr[k]+ ")")
                }
            }
        }
    }
    return pairsum + "";
}
// arr = [3, 1, 2, 9,7,5,-1,6]
// target = 10
let arr = []
const size = prompt("Enter size of arry: ")
const target = prompt("Enter target value: ")

for(let i = 0;i<size;i++){
     arr[i] = Number(prompt("Enter element No "+(i+1)+": "))
}

console.log(SumPair(arr,target))