# Basics

- mdn documentation
- ECMAScript - original documentation

## Variables

- const: to declare constant variables, which can't be changed
- let: to declare variables, whose value can be modified later. We use let now, because it uses scope
- var: to declare variables, whose value can be modified later. We don't use var because it doesn't work for scope

## Data Types

- number -> integer/float
- bigInt -> big integers
- string
- boolean -> true/false
- null -> standalone value (empty value)
- undefined -> when value isn't defined
- symbol -> unique

- object 

- typeof : used to check the data type of a value or a variable\
Note: typeof null is *object* and typeof undefined is *undefined* and typeof function is function only but it is called object function\

They are of 2 types: 
- Primitive : call by value takes place. The changes are made in the copy and we get the value and not the address of the variable
    - String, Boolean, Number, null, undefined, symbol, BigInt
- Reference (Non-primitive) : memory address
    - Arrays, Objects (Key-value pair), Functions\
    Data type of all of them are object

## Conversion

- If we want to convert the datatype of any value, we can input the value in datatype keyword.\
Eg: Number("33") -> 33\
\
Note: In case of type casting to **number**
- If the value passed cannot be converted to a number, JS will convert it and show its data type to be a number, but it will actually be *NaN* (Not a number).
- If the value passed is null, converted value will be *0*
- If the value passed is undefined, converted value will be *NaN*
- If the value passed is true/false, converted value will be *1/0* accordingly
\
Note: In case of type casting to **boolean**  
- If the value passed is 1 or any value/0, converted value will be *true/false*
- If the value passed is ""/null/undefined, converted value will be *false*
- If the value passed is "string", converted value will be *true*

## Operations

- While concatenation of string and numbers:\
If we have addition of numbers followed by string, it will add the numbers and concatenate with string, returning the whole answer as string\
In case of string followed by values, it will consider everything to be string and simply concatenate it
- +true converts true to 1 and +"" which is false, converts it to 0

## Comparisons

- JS sometimes gives unexpected results while comparisons, so make sure the datatype of both elements while comparison is equal
- During null comparison with 0:\
    - null > 0 gives false
    - null == 0 gives false
    - null >= gives true\
    because equality check and comparison work differently. Comparisons convert null to 0 and hence, null > 0 gives us false
- Undefined comparison with 0 always gives false irrespective of the operation
- Strict check (===): It checks the datatype as well

## Extras

- console.log(): for printing variable's value
- console.table([]): for printing more than one variable's value in the form of a table
- If we declare any variable and don't assign a value to it, it is declared as 'undefined'
- "use strict"; : written at the starting of the file and makes sure the newer version of JS is used
- alert(): it is used to send a pop-up message on the website. It can't be used on terminal
- JS is dynamically typed, means we don't declare the datatype of the variable


