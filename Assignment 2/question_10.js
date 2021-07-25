function Arrysort(arr, index){

    if(index == arr.length-1){
    return "Arry is Sorted";
}
if(arr[index]<arr[index+1]){
     return Arrysort(arr,index+1)
    }
    return "Arry is not sorted"
}
let Arr = [1,2,3,4,5,6]
console.log(Arrysort(Arr,0))

