function NokiaKeyPad(input, arr,count, numStr = "", index = 0) {
    if (index === input.length) {
      count.push(numStr)
      return;
    }
  
    let ind = parseInt(input[index]);
  
    let str = arr[ind];
    for (let ch of str) {
      let newNumStr = numStr + ch;
      NokiaKeyPad(input, arr,count, newNumStr, index + 1);
    }
    return count.length
  }
  let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let count = []
  console.log(NokiaKeyPad("23",arr,count))