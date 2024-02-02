function double(arr){
    for(let i = 0; i < arr.length; i++){
        return arr[i] * 2
    }
}

console.log(double([1,2,3]), [2,4,6])
console.log(double([5,3,7]), [10,6,14])
console.log(double([]), 'Array is invalid')