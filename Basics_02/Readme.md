## Arrays

- elements in an array can be of different types as well
- it uses the concept of shallow copy
- we have 3 functions - push, concat, spread. These three are used to combine 2 arrays
    1. Push: It pushes one array inside the other. The array pushed is treated as a whole element
    1. Concat: It concatenates two arrays, joins them. It stores all the elements in a new array and doesn't change the original one
    1. Spread: It spreads the arrays into different elements and then we put them in one single array. It uses the method [...arr]. This is used everywhere
- Flat method converts the multi depth array into 1 single array. We can define the depth or write Infinity where it figures out the depth on its own.
- Sometimes we get data in different formats, so we can convert it into array using Array.from()
- We can't directly convert an object to array. We need to specify if we need an array of keys or values
- We can use Array.of() to make an array from different values.

## Objects

- An object made from constructor is always singleton. Whereas an object made from literals is not.
- It has key:value pairs
- Key is processed as a string
- To use a symbol as a key, we need to declare it as [variable_name]
- Functions can be treated as variables too
- When we use *this*, all the properties inside the mentioned object is accessed
\
- In objects, we can perform nesting of objects and we can access it through . operator
- Optional chaining: we add a *?* after the key, just incase its value is not available. It is used in API calling
- Merging objects:\
    1. We can directly write {obj1,obj2} and store it in another object, but it will give object inside object
    1. Other method is, we can use Object.assign() method. We need to store the result in another object.\
    Syntax - Object.assign({},obj1,obj2). *{}* this is optional, but important to make sure we get an object as return type. {}, acts as the target, otherwise the values will be stored in obj1, which will act as target.
    1. Spreading

## JSON(Javascript Object Notation) Format
- While fetching data using API, we will get objects/arrays(with objects nested within). These will hold the data we need to work upon
- In JSON, it is not returned as a variable, we simply get object/array
- The keys are strings and value are dependent on their data types.