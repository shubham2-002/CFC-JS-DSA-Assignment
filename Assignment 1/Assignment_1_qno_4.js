let odd_skips = 1;
let even =2;
while(even<=100){
    process.stdout.write(even + " ")
    even=even+(odd_skips*4)
    odd_skips++;
}

