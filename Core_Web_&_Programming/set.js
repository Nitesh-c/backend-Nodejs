// what is set object in javascript and why to use ?
// ->> because it does't allow the duplicate value and if the duplicate value is give it ignore the duplicate value

// lets create set();

const user = new Set();
user.add("nitesh")
user.add("nitesh@gmail.com")
user.add("nitesh")
user.add("nitesh kumar");

// console.table(user); // it's ignore the duplicate value


// its methods
// add(), delete(), clear(), has() ==> this all are methods, size ==> this is property

let fruits = ["apple", "mango", "banana", "apple", "mango"];

let freshFruits = new Set([...fruits]);
console.log([freshFruits]);
