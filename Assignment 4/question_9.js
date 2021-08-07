function checkRule(str) {
    if(str.length==0){
        return true
    }

if(str.substring(0,1)!=="a"&& str.substring(0,2)!=="bb"){
    return false
}

let checkA = false
let checkBB = false
if(str.substring(0,1)==="a"){
    checkA = checkRule(str.substring(1))
}
else if(str.substring(0,2)==="bb"){
    checkBB = checkRule(str.substring(2))
}
return checkA||checkBB
}
let str = "abbabb"
console.log(checkRule(str))