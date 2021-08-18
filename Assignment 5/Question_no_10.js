function lexoSort(n,arr=[]){

    for(let i =1;i<=n;i++){
        arr.push(i.toString())
    }
    arr.sort()
    let ans = []
    for(let i =0;i<n;i++){
        ans.push(parseInt(arr[i]))
    }
    return ans
}
console.log(lexoSort(11))