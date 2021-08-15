function CheesePath (row,col,arr=[]){
    if(row<0||col<0){
        return
    }
    if(row==0&&col==0){
        console.log(arr)
        return
    }
    arr.push("H")
    let HorizontalPath = CheesePath(row-1,col,arr)
    arr.pop()
    arr.push("V")
    let VerticalPath = CheesePath(row,col-1,arr)
    arr.pop()
    arr.push("D")
    let DiagonalPath = CheesePath(row-1,col-1,arr)
    arr.pop()
}
CheesePath(2,2)