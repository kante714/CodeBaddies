// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


function mergeArrays(a, b) {
  let newArray = [];
  for (let item of a) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  for (let item of b) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
console.log(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);