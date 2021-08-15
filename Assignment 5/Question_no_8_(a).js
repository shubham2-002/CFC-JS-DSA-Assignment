
let count = 0
function Pairchecker(arr, index = 0, Group_A = [], Group_B = [], A_sum = 0, B_sum = 0,) {
    if (index == arr.length) {
        if (A_sum == B_sum) {
            // console.log(Group_A, ":", Group_B)
            count++
        }
        return 
    }
    Group_A.push(arr[index])
    Pairchecker(arr, index + 1, Group_A, Group_B, A_sum + arr[index], B_sum,)
    Group_A.pop()
    Group_B.push(arr[index])
    Pairchecker(arr, index + 1, Group_A, Group_B, A_sum, B_sum + arr[index],)
    Group_B.pop()
    return count
}
let arr = [-1, 3, 7, 4, 2, 1]
console.log("Total No of Combinations are: ",Pairchecker(arr))