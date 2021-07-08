let n =5;
row = 1;
while (row<=n) {
    col = 1;
    while(col<=row){
        process.stdout.write("* ");
        col++;
    }
    console.log()
    row++
}
