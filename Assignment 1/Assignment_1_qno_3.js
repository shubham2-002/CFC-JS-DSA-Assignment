
let num1 = 30;
let num2 = 135;

while(num1!= num2){
    if(num1>num2){
        num1 = num1-num2;
    }
    else{
        num2 =num2 -num1;
    }
}
console.log("GCD = "+num1)