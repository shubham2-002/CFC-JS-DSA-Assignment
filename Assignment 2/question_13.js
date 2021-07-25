function sort(arr){
    let i = 0;j = arr.length-1
    while(i<=j){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        i++
        j--
    }
 }
 let arr=[1,2,3,4,5,6,7,8,9,10]
 sort(arr)
 console.log(arr)