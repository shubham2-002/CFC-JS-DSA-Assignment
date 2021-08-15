function NokiaKeyPad(input, arr, numStr = "", index = 0) {
    if (index === input.length) {
        console.log(numStr)
      return;
    }
  
    let ind = parseInt(input[index]);
  
    let str = arr[ind];
    for (let ch of str) {
      let newNumStr = numStr + ch;
      NokiaKeyPad(input, arr, newNumStr, index + 1);
    }
    return count.length
  }
  let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let count = []
NokiaKeyPad("23",arr)
  