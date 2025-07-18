/*
objects in js - {}
all methods of objects are-
    Object.keys()
    Object.values()
    Object.entries()
    Object.assign()
    Object.freeze()
    Object.hasOwn() // new
    Object.hasOwnProperty() // old
    Object.create()
    Object.getPrototypeOf()
    Object.defineProperty()
    Object.toString()
*/

// Object.keys()
const user = {
    name:"ram",
    age: 989898,
    isGod: true
}
let allKeys = Object.keys(user);
console.log(allKeys);

// Object.values()
const allValues = Object.values(user);
console.log(allValues);

// Object.entries()
const ytuser = {
    username: "john",
    subs: "32k"
}

let allEntries = Object.entries(ytuser);
console.log(allEntries);

// Object.assign()
