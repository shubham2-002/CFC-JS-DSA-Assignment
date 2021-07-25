
let num1 = 56;
let num2 = 98;

while(num1!= num2){
    if(num1>num2){
        num1 = num1-num2;
    }
    else{
        num2 =num2 -num1;
    }
}
console.log("GCD = "+num2)