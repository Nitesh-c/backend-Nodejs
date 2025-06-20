/*
console is a window object - window.console.log("log function is very useful");
but, becasue this is window objects we use direct like console.log("hello world !");


// list of some important console methods

---> log()
---> clear()
---> table()

how to print something in console -> using console object and second method is process.stdout("hello world!")
*/

// for console.table()
const user1 = {
    name:"nitesh",
    email:"niteshbhai0911@chagpt.com",
    password: "password@123",
    age: 13
}
const user2 = {
    name:"ram",
    email:"ram1122@chagpt.com",
    password: "ram@123",
    age: 29
}
const user3 = {
    name:"john",
    email:"john122@chagpt.com",
    password: "john@123",
    age: 39
}
const user4 = {
    name:"ele",
    email:"ele1122@chagpt.com",
    password: "elm@123",
    age: 32
}
const user5 = {
    name:"anmol",
    email:"anoml02@chagpt.com",
    password: "qwerty@123",
    age: 23
}


console.log("hello world");
console.clear(); 
console.table([user1, user2, user3, user4, user5]);
