function BubleSort(arr,size){
    if(size==0){
        return
    }
    for(let i = 0;i<size-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
        BubleSort(arr,size-1)
    }
}
arr = [10,9,8,13,11,4,3,2,1];
size = arr.length
BubleSort(arr,size)
console.log(arr)