function reverseArrayOfDigit(n){
    return n.toString().split('').reverse().map(Number)
}

console.log(reverseArrayOfDigit(348597), [7,9,5,8,4,3])
console.log(reverseArrayOfDigit(0), [0])