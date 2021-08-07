function sum(n){
    if(n<=1){
        return n
    }
    return n+sum(n-1)
}
let n =5
console.log(sum(n))