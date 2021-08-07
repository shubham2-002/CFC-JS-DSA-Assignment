function TargetInd(arr,target,index){
    if(arr[index]==target){
    return index
    }
    if(index<0){
        return -1
    }
    else{
        return TargetInd(arr,target,index-1)
    }
}
let arr = [3,2,1,8,6,1,3]
let size = arr.length-1
let target = 1;
console.log(TargetInd(arr,target,size))