function DeciToOct(num){
    let oct = 0;
    let pos =1;
    while(num!=0){
        let rem = num%8;
        oct = rem*pos+oct
        num = parseInt(num/8)
        pos=pos*10;
    }
    return oct
}
    console.log(DeciToOct(453))