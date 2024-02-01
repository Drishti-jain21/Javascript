const name = "Drishti"
const age = 19

console.log(`Hello! My name is ${name} and my age is ${age}`)

let gameName = new String('djhello')
console.log(gameName.__proto__) // prototype
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


console.log(typeof gameName)

let newName = new String(gameName)
newName = 'dj'
console.log(newName)
console.log(gameName) // value remains same

let newString = gameName.substring(0,4)
console.log(newString)

newString = "   hello   "
console.log(newString.trim())

newString = "drishti%jain"
console.log(newString.replace('%','-'))

console.log(+newString.includes('jain'))

console.log(newString.split('%'))