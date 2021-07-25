function SortArry(arr){
    for(let i =0;i<arr.length-1;i++){
        for(let j =0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
}
let arr = [1,1 ,1,0,1,0,1,1,0,0]
SortArry(arr)
console.log(arr)