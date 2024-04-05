// Array

const myArr = [0,1,2,3,4]
const myArr2 = new Array(1,2,3,4)

myArr.push(6)
myArr.pop() // removes the last element from the array

myArr.unshift(9) // it appends to the starting of array, whole array is shifted to do this
myArr.shift() // removes the first element from the array

console.log(myArr.includes(9)); // returns true if element is present in array
console.log(myArr.indexOf(9)); // return index of element if present, else -1

const newVar = myArr.join() // it joins the array and converts it into a string

console.log(myArr);
console.log(newVar);
console.log(typeof newVar);

// slice, splice
/**
 * In slice, the end range is not included
 * In splice, the end range is included
 * Another difference is, after slice, the array remains the same but after splice, the array changes
 * and the value of the array remaining is all the elements which were not included in the range of splice
 */

console.log("A ", myArr); // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)

console.log(myn1);  // [1,2]
console.log("B ", myArr); // B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // C [0,4,5]
console.log(myn2); // [1,2,3]