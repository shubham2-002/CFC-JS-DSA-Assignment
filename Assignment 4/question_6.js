function Inverse(arr,index = 0,newarr=[],counter = 0){
    if(counter==arr.length){
        console.log(newarr)
        return
    }
    if(arr[index]==counter+1){
        newarr.push(index+1)
        return Inverse(arr,index=0,newarr,counter+1)
    }
    return Inverse(arr,index+1,newarr,counter)

}
let arr = [2,5,4,1,3];
Inverse(arr)