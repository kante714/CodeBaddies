//P: if the given parameter is undefined ? what to do? is the parameter number
//R: Array of Number from number
//E: 330 should return [0,3,3]
// 0 should return [0]
// undefined should return Not a Number
//P: write a function that convert number to array of digit
function reverseArrayOfDigit(n){
    // convert num to string than split it after that reverse it and lastly again convert it to number
    return n.toString().split('').reverse().map(Number)
}

console.log(reverseArrayOfDigit(348597), [7,9,5,8,4,3])
console.log(reverseArrayOfDigit(0), [0])
console.log(reverseArrayOfDigit(78189), [9,8,1,8,7])