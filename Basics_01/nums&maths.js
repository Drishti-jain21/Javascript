const age = 19
console.log(age)

let balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)

console.log(balance.toFixed(2))

balance = 120.8972
console.log(balance.toPrecision(4))

balance = 10000000
console.log(balance.toLocaleString('en-IN'))

console.log(Math.max(4,3,1,0))
console.log(Math.random()*10 + 1)

// to achieve a random number between two values
let max = 20
let min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)