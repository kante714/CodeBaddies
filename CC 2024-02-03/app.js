// return true is sum of squares of array is greater than sum of cubes of array 
//P: is the parameter an array . what if it return undefined or NaN
//R: return true if sum of squares is greter than sum of cubes else return false
//E: [4,8,9], [1,2,3]) should return  true
// [4,8,9], [8,4,9]) should return false
// [7,3,2], [1,4,2]) should return true
//P: write a function to get sum of squares of array is greater than sum of cubes of array
function greaterThan(a, b){
    let sumOfSquares = a.reduce((sum, num) => sum + num ** 2, 0)
    let sumOfCubes = b.reduce((sum, num) => sum + num ** 3, 0)
    return sumOfSquares > sumOfCubes
}

console.log(greaterThan([4,8,9], [1,2,3]), true)
console.log(greaterThan([4,8,9], [8,4,9]), false)
console.log(greaterThan([7,3,2], [1,4,2]), true)