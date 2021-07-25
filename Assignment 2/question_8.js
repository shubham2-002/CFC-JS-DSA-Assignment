const prompt = require('prompt-sync')()

const size = Number(prompt("Enter size of arry: "));
let arr = [];
let index = 1;
for(let j =0;j<size;j++){
     arr[j] = Number(prompt("Enter element no "+index+": "))
     index++;
}
// let arr = [5,45,23,63,27,80,15,2,65,30]
let multiple = 5;
let Mulcount=0;
for(let i =0;i<size;i++){
    if(arr[i]%5==0){
        Mulcount++;
    }
}
console.log(Mulcount);