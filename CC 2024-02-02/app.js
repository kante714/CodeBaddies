function double(arr){
    if(arr.length === 0 || arr === undefined){
        return 'Array is invalid'
    }else{
        return arr.map(item => item * 2)
    }
}

console.log(double([1,2,3]), [2,4,6])
console.log(double([5,3,7]), [10,6,14])
console.log(double([]), 'Array is invalid')