myArr = [1,2,3,4]
myArr2 = [5,6,7,8]

myArr.push(myArr2)
console.log(myArr); // it pushes whole myArr2 inside myArr, treating it as an element, which can be accessed using index
console.log(myArr[4][2]); //7

newArr = myArr.concat(myArr2) // joins two arrays and stores it in a new variable, it doesn't change the original array
console.log(newArr);

const wholeArray = [...myArr, ...myArr2]
console.log(wholeArray);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Drishti"))
console.log(Array.from("Drishti"))
console.log(Array.from({name: "Drishti"})) // it returns [] 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));