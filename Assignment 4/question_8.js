let arr = [2,4,5,6,7,1,8]


1
function maxindex(arr, i) {
    if (i == arr.length) {
        return i - 1;
    }
    if (arr[i] > arr[maxindex(arr, i + 1)]) {
        return i;
    }
    else {
       return maxindex(arr, i + 1)
    }

}
console.log(maxindex(arr,0))
// console.log(maxindex(arr,0))
