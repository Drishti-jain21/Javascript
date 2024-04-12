// normal function
// function example(){
//     console.log("DB CONNECTED");
// }
// example()

// iife
(function example(){ 
    // named IIFE
    console.log("DB CONNECTED");
})();

(() => (console.log("DB CONNECTED TWO")))();

(() => {
    // un named iife
    console.log("DB CONNECTED THREE")
})();

((name) => {
    // parameter iife
    console.log(`hello ${name}`)
})(`drishti`);