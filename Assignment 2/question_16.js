let arr = [7,2,6];
let n = arr.length
for(let index = 0;index<2**n;index++){
    let arr1=[];
    let i = 0;
    let index1 = index;
    while(index1>0){
        if(index1&1){
            arr1.push(arr[i])
        }
        index1 = index1 >>1;
        i++
    }
    console.log(arr1);
}