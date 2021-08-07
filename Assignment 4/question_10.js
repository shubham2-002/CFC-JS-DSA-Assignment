function TwinCount(str, index = 0, TwinCounter = 0) {
    if (index > str.length - 3) {
        console.log(TwinCounter)
        return 
    }

    if (str[index] != str[index + 1] && str[index] == str[index + 2]) {
        return TwinCount(str,index+1,TwinCounter+1)
    }
    else {
        return TwinCount(str, index + 1, TwinCounter);
    }
}
let str = "AXAXA"
 TwinCount(str)
// console.log(res)