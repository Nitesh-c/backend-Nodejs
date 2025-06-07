// there are four types of functions 
// 1. regular function with function keyword
// 2. function expression 
// 3. arrow function (ES6 2015)
// 4. IIFE (immediately invoked function expression)

function square(num){
    return (num * num)
}

console.log(square(2));


let sum = function (...num){
    return num.reduce(function(accum, curr){
        return (accum + curr);
    })
}
let studentsMarks = [86, 66, 76, 69, 88]
console.log(sum(studentsMarks));



let greet = ()=> "Hello, Namasta";
console.log(greet());


(()=>{
    console.log("I am IIFE")
})()


{
    // high order function
// setTimeout() is a function

setTimeout(()=>{
    console.log("hello after 2 seconds");
}, 2000)

}