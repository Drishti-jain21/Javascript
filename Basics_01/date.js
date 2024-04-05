// Dates

let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

/** Output
2024-04-03T17:40:36.400Z
Wed Apr 03 2024 23:10:36 GMT+0530 (India Standard Time)
2024-04-03T17:40:36.400Z
2024-04-03T17:40:36.400Z
Wed Apr 03 2024
3/4/2024
3/4/2024, 11:11:43 pm
 */

// let myCreatedDate = new Date(2024,2,21,12,5)
let myCreatedDate = new Date("03-21-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //Output: 1712166794092
console.log(myCreatedDate.getTime()); // returns time in millisecond, easier to compare now

console.log(Math.floor(myTimeStamp/1000)) // to convert to seconds

// we can specifically print the month/day/year, etc.
console.log(date.getMonth()+1);
console.log(date.getDay()+1);

// we can customize the locale string
date.toLocaleString('default',{
    weekday: "long" // returns full weekday - Monday
})
