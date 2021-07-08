let num = 123456789123456789
let count =0;
while(num!=0){
    num=parseInt(num/10);
    count++;
}
console.log(count+" ");