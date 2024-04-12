// this in object
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // it will give the whole object
    }
}

user.welcomeMessage() // it is a method
user.username = "sam"
user.welcomeMessage()

console.log(this);

// this in functions

// function know(){
//     let username = "drishti"
//     console.log(this); // it will return details about the function
//     console.log(this.username); // it will return undefined because this works just for objects
// }

// const know = function (){
//     let username = "drishti"
//     console.log(this); // it will return details about the function
//     console.log(this.username); // it will return undefined
// }

/** arrow function */ 
const know = () =>{
    let username = "drishti"
    console.log(this); // it will return {}
    console.log(this.username); // it will return undefined 
}
know()

// Different type of arrow function

/** 
 * 1. Basic/ explicit return (we need to mention return keyword)
 */
const addTwo = (num1, num2) => {
    return num1 + num2
}

/**
 * 2. Implicit return 
 */
const addTwo1 = (num1, num2) =>  num1 + num2
const addTwo2 = (num1, num2) =>  (num1 + num2)
const returnObject = () => ({username: "drishti"})

console.log(returnObject()) // it will print the object as we implicitly returned it

// example
// const arr = [2,5,1,2,4]
// arr.forEach(() => ()) we can write like this
// arr.forEach(() => {}) we can write like this
// arr.forEach(function(){}) we can write like this