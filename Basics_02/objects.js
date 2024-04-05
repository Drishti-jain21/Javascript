// Object literals

const symb = Symbol("Key1")

const user = {
    name : "Drishti",
    "full name": "Drishti Jain",
    [symb]: "key1-value",
    age: 20,
    location: "Delhi",
    email: "drishti@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Wednesday"]
} 

// Accessing values
// second method is better as in case, the key is stored as string by the user, we won't be able to use the first method then.
console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);

console.log(user[symb]);

// We can freeze the object to avoid further changes
user.location = "Punjab"
// Object.freeze(user)
user.location = "Delhi" // this change won't be seen
console.log(user);

// Using function as

user.greeting = function(){
    console.log("Hello user");
}
user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`); // string interpolation
}

console.log(user.greeting); // we don't get the return of function, just its reference type
console.log(user.greeting());
console.log(user.greetingTwo());

