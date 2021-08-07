function reverse(arr,index=0,newarr=[]) {
    if(index===arr.length){
        return newarr
    }
    newarr.unshift(arr[index])
    return reverse(arr,index+1,newarr)
}
arr = [1,2,3,4,5,6]
console.log(reverse(arr))
