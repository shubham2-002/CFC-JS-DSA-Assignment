function RemoveX(str,index=0,newstr=""){
    if(index==str.length-1){
        str = str+newstr
        console.log(str)
        return 
    }
    
    if(str[index]=="x"){
       newstr = newstr+ str[index]
       let modstr = str.replace(str[index],"")
        return RemoveX(modstr,index,newstr)
    }
    return RemoveX(str,index+1,newstr)
}
str ="abexexdexexd"
RemoveX(str)