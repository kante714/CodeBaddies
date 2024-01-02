//P: if the given parameter is undefined ? what to do? is the parameter number
//R: Array of Number
//E: 330 should return [0,3,3]
// 0 should return [0]
// undefined should return Not a Number
//P: write a function that convert number to array of digit
function reverseArrayOfDigit(n){
    // convert given number to stirng than split it after that reverse it and convert is to number
    return n.toString().split('').reverse().map(Number)
}

console.log(reverseArrayOfDigit(348597), [7,9,5,8,4,3])
console.log(reverseArrayOfDigit(0), [0])