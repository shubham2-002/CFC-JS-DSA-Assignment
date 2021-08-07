function Balancecheck(str, index = 0, OpenBkt = 0, CloseBkt = 0) {
    if (index == str.length) {
        if (OpenBkt == CloseBkt) {
            return true
        }
        else
            return false
    }
    if (str[index] == '[' || str[index] == '{' || str[index] == '(') {
        return Balancecheck(str, index + 1, OpenBkt + 1, CloseBkt)
    }
    else if (str[index] == '}' || str[index] == ']' || str[index] == ')') {
        return Balancecheck(str, index + 1, OpenBkt, CloseBkt + 1)
    }
    else {
        return Balancecheck(str, index + 1, OpenBkt, CloseBkt )
    }
}

let str = "[a+{b+(c+d)+e}+f]"
console.log(Balancecheck(str))