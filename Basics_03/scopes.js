let a = 300
if (true) {
    let a = 10
    console.log("INNER: ",a);
}

console.log(a);

// scope in nested functions
function one(){
    const username = "drishti"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); not accessible

     two()

}
one()

// scope in nested if statement
if (true) {
    const username = "drishti"
    if (username === "drishti") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); not accessible
}

// console.log(username); not accessible

/**
 * Hoisting
 */

// function
console.log(addone(5))
function addone(num){
    return num + 1
}

// expression
addTwo(5) // will give error as we can't access it before declaration
const addTwo = function(num){
    return num + 2
}