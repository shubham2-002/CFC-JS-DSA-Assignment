let n =  5;
let row = 0;
let rowMirror = 0;
while(rowMirror< 2*n-1){
    let col = 0;
    let colMirror = 0;
    while(colMirror < 2*n-1){
        if(col<=row){
            process.stdout.write("* ");
            
        }
        else{
            process.stdout.write("  ");

        }
        if(colMirror<n-1){
            col++;
        }
        else{
            col--
        }
        colMirror++;

    }
    if(rowMirror< n-1){
        row++
    }
    else{
        row--;
    }
    console.log()
    rowMirror++
}
