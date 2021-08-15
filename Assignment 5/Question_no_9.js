let answer = []
function TargetSum(arr,target,subset=[],index=0,arrSum=0){
    if(index==arr.length){
        if(arrSum==target){
            let temp = [...subset]
            answer.push(temp)
        }
        return
    }

    subset.push(arr[index])
    TargetSum(arr,target,subset,index+1,arrSum+arr[index])
    subset.pop()
    TargetSum(arr,target,subset,index+1,arrSum)
    return
}
let arr = [2,6,3,1,5,7];
let target = 8
TargetSum(arr,target)
console.log(answer)