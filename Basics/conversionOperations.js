/* converting to number */

let score = "33abc"
// let score = null
// let score = undefined
// let score = true
console.log(typeof score)

let value = Number(score)
console.log(typeof value)
console.log(value)

/* converting to boolean */

let flag = null 
console.log(Boolean(flag))

/* Operations */

console.log("1"+"2") // 12
console.log("1"+2) // 12
console.log(1+"2") // 12
console.log(1+2+"2") // 32
console.log("1"+2+2) // 122

console.log(+true)
console.log(+"")

