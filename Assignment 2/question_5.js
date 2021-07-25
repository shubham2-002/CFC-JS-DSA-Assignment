let arr = [2,5,4,1,3];
let size = arr.length
let arrnew = [size]
for(let i = 0;i<size;i++){
    for(let j = 0;j<size;j++){
        if(arr[j]==i+1){
            process.stdout.write(j+1+"");
            break;
        }
    }

}