function NokiaKeyPad(input, arr,arr2, numStr = "", index = 0) {
    if (index === input.length) {
      arr2.push(numStr)
      return;
    }
  
    let ind = parseInt(input[index]);
  
    let str = arr[ind];
    for (let ch of str) {
      let newNumStr = numStr + ch;
      NokiaKeyPad(input, arr,arr2, newNumStr, index + 1);
    }
    return 
  }
  let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let arr2 = []
  console.log(NokiaKeyPad("23",arr,arr2))
  console.log(arr2)