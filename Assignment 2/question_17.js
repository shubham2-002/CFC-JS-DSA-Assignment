let arr = [7,2,6];
let arr1 = [0,0,0];
let ans = [];
function answer(arr,arr1,ans){
    if(ans.length==arr.length){
        console.log(ans)
        return;
    }
    for(let idex = 0;idex<arr.length;idex++){
        if(arr1[idex]==0){
            arr1[idex]=1;
            ans.push(arr[idex]);
            answer(arr,arr1,ans)
            arr1[idex]=0;
            ans.pop();
        }
    }
}
answer(arr,arr1,ans)