let n =5;
let arr = [1,1];
let arr2 = [];
if(n==1){
    console.log("1");
}
else if(n==2){
    console.log("1\n 1");
}
else{
    console.log("1\n1 1");
    
    for(let row =0;row<n-2;row++){
        let string = "1";
        for(let index =0;index<arr.length-1;index++){
            let element = arr[index]+arr[index+1];
            string+=" "+element
            // console.log(string);
        }
        arr2 = []
        for(let index = 0;index<arr.length-1;index++){
            let element = arr[index]+arr[index+1];
            arr2.push(element)
        }
        arr2.push(1);
        arr2.unshift(1);
        arr=Array.from(arr2)
        string+=" 1";
        console.log(string);
    }
}