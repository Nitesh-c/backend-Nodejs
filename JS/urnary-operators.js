// unary operator in js - unary means -> involving only one
/*
unary plus
unary minus
increment
decrement
logical not
bitwise not
typeof() // we cannot say function or method
void()
delete // we can say it's a property of object
*/

// void() -- always return undefined
// where do we use ?
// for doing some operations but not want answer

console.log(void(23))
console.log(void("nitesh"))
console.log(void(true))
console.log(void([12,12,12,12,12]))
console.log(void({a:23, b:134}))

// delete

const youtubeUser = {
    username: "nitesh_12", 
    "first Name": "Nitesh",
    "last Name": "Kumar",
    isAdmin: false,
    isLoggedIn: true
};

// let's delete the isAdmin property from youtubeuser object

delete youtubeUser.isAdmin;
// it return true or false;

let x = 12;
delete x; // not work but not threw error it return false; works only on objects 