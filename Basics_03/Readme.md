## Functions
- When we write the function_name : it gives us the reference to it and function_name() : it executes the function
- Parameters and arguments
- Returning the value
- Checking for correct datatype in the function, to avoid errors
- If no argument is passed, it considers it to be *undefined*
- Rest operator (...), it is same as spread operator, just the use case varies.\
Using the rest operator, we combine all the arguments and we get an array with all the elements.

## Scope
- We use let as it uses the concept of scope. Var doesn't use the concept of scope and it rewrites the variable value even if it is changed inside if/else/loops
- Scope in node environment and global scope in console is different.
- Global variable is a variable written outside a loop/function
- Local/Block variable is a variable written inside a loop/function
- Topics to be learnt in future:\
    1. Closure
    1. Hoisting

## Arrow functions
- *This* tells us the current context of the object. Context means values, variables it is holding
- *This* outside the user object will give us empty object as there is no global variable and we are in node environment
- Global object in browser in Window
- We now have separate engines to run JS (node,dino,bun)

## IIFE (Immediately Invoked Function Expressions)
- When we need to immediately execute a function
- Why do we need it?\
    1. Sometimes we need to run database files as soon as we open a website/app, to start database connection
    1. Sometimes we don't want the global scope to overwrite the local variables (to avoid global scope pollution)
- Syntax: ()()\
First (), is where we write function definition, we can see it as return as we saw in arrow functions.\
() => ()\
Second () is where we simply execute the function
- We need to end iife by ;