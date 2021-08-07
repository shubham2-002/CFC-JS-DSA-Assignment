function InderxFinder(arr,target,index=0,newarr=[]) {
    if(index==arr.length){
        return newarr     
    }
    if(arr[index]==target){
        newarr.push(index)
        // console.log(newarr)
    }
    return InderxFinder(arr,target,index+1,newarr)

}
arr = [0,4,2,2,1,2,3,4,2]
target = 2
console.log(InderxFinder(arr,target))