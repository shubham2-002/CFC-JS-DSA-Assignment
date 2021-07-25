
function Rev(n1){
    let rev = 0;
    while(n1!=0){
        let rem = n1%10;
        rev = rev*10+rem;
        n1= parseInt(n1/10);
    }
    return rev;
}

console.log(Rev(38105));