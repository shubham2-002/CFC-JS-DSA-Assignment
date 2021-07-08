let n =5;
let row =0;
while(row<n){
    let colMirror = 0;
    let col = 0;
    while(colMirror<n*2-1){
        if(col<n-row-1){
            process.stdout.write("_ ");
        }
        else{
            process.stdout.write(col+" ");
        }
        if(colMirror<n-1){
            col++;
        }
        else{
            col--;
        }
        colMirror++;
    }
    
    process.stdout.write("\n");
    row++;
}