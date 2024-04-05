// object singleton and how we can create them using constructor

const user = new Object() // this is a singleton object, rest everything is same as literals

user.id = "hello"
user.name = "abc"
user.loggedIn = false

console.log(user);

const user2 = {
    email: "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname: "drishti",
            lastname: "jain"
        }
    }
}

console.log(user2.fullname.userfullname.firstname);
// console.log(user2.fullname?.userfullname.firstname); optional chaining

// Merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2} object in object
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}


// we get data like this through API fetching, in the form of array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

// functions on object
console.log(Object.keys(user)); // we get an array of keys
console.log(Object.values(user)); // we get an array of values
console.log(Object.entries(user)); // we get an array of key:value pairs. It is a nested array
// output: [ [ 'id', 'hello' ], [ 'name', 'abc' ], [ 'loggedIn', false ] ]

// Sometimes we need to check if an object has the key or not
console.log(user.hasOwnProperty('isLoggedIn')) // return bool value

/**
 * Destructuring
 */
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor - to avoid writing this again and again, we use destructuring

const {courseInstructor: instructor} = course // courseInstructor is the key from object we need to destructure and instructor is the new name for it

// console.log(courseInstructor);
console.log(instructor);


// JSON FORMAT

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]