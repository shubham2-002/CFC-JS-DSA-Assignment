
function ReplaceDuplicate(str,index=0) {
    if(index==str.length){
        console.log(str)
        return str
    }
    if(str[index]==str[index+1]){
        let newstr = str.replace(str[index],'')
        return ReplaceDuplicate(newstr,index)
    }
    return ReplaceDuplicate(str,index+1)
}
let str = "Heeeelllloo"
ReplaceDuplicate(str)