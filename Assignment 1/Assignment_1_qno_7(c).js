let n =5;
let row = 0;
while(row<n){
    let colMirror = 0;
    let col =0;
    let count =1
    while (colMirror<2*n-1) {
        if(col<n-row-1){
            process.stdout.write("  ");
            count=1;
        }
        else{
            process.stdout.write(count+" ");
            count++
        }
        if(colMirror<n-1){
            col++
        }
        else{
            col--
            count-=2;
            
        }
        
        colMirror++
        
    }
    console.log()
    row++
}