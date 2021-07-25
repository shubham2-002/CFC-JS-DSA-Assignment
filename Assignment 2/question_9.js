
function primecount(num){
    if(num<=1){
        return 0;
    }
    if(num==2){
        return 1;
    }
    for(let i =2;i<num;i++){
        if(num%i==0){
            return 0
        }
        return 1;
    }
}
let arr = [2,3,5,7,11,17,19,20,23,55,23]
let isPrime = 0;
let count = 0;
for(let i = 0;i<arr.length-1;i++){
    isPrime=primecount(arr[i]);
    if(isPrime==1){
        count++;
    }
}
console.log(count)
