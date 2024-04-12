function sayHello(){
    console.log("Hello");
}

sayHello()

/**function to add 2 numbers
*/

function addNumbers(number1,number2){
    // console.log(number1+number2);
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addNumbers(3, 5)
console.log("Result: ", result);

function loginUserMessage(username = "abc"){ // default value
    if(username===undefined) { // (!username)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Drishti"));

/* Rest operator
*/

function calcCartPrice(...num1){
    return num1
}
console.log(calcCartPrice(200,300,400));

/*
* Object in function
*/ 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) - we can pass the variable object or directly the object
handleObject({
    username: "sam",
    price: 399
})

/**
 * Array in function
 */

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
