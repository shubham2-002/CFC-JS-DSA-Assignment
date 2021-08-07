
    let count = 0
function Checker(arr, index = 0, Group_A = [], Group_B = [], A_sum = 0, B_sum = 0,) {
    if (index == arr.length) {
        if (A_sum == B_sum) {
           count++
        }
        return
    }
    Group_A.push(arr[index])
    Checker(arr, index + 1, Group_A, Group_B, A_sum + arr[index], B_sum,)
    Group_A.pop()
    Group_B.push(arr[index])
    Checker(arr, index + 1, Group_A, Group_B, A_sum, B_sum + arr[index],)
    Group_B.pop()
    return count
}
let arr = [1,2,3,3,4,5]
console.log(Checker(arr))