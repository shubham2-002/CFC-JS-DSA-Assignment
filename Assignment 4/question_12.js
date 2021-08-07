function DuplicateFind(str, ind = 0) {
    if (ind == str.length - 1) {
        console.log(str)
        return str
    }

    if (str[ind] == str[ind + 1]) {
        let ModStr = str.substring(ind + 1)
        let ChangeStr = str.substring(0, ind + 1) + "-";
        let NewStr = ChangeStr + ModStr
        return DuplicateFind(NewStr, ind + 1)
    }
    return DuplicateFind(str, ind + 1)

}
let str = 'hello';
let res = DuplicateFind(str);