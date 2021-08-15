function SubSeqAscii(str,ans=''){
    if(str.length==0){
        console.log(ans);
        return
    }
    let singleDigi = Number(str[0])
    SubSeqAscii(str.substring(1),ans+String.fromCharCode(96+singleDigi))
    
    let DoubleDigi = Number(str.substring(0,2))
    if(str.length>=2&&DoubleDigi<=26){
    SubSeqAscii(str.substring(2),ans+String.fromCharCode(96+DoubleDigi))
    }
}
SubSeqAscii("1123")