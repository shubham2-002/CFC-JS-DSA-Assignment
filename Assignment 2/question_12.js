
let arr = [3, 8, 5, 13, 6, 12, 18, 5];
let arr1 = [];
for (let i = 0; i < arr.length ; ++i) {
    if (arr[i] % 2 == 0) {
        arr1.unshift(arr[i])
    }
    else {
         arr1.push(arr[i])
    }
}

console.log(arr1);
// console.log(arr1);