// Some topics created by me
// JS & programming Fundamentals

// 1. Datatypes

/*
there are 2 two types of js datatypes - primitive and non-primitve datatypes
*/
{
// primitive datatypes are immutable
    // string
let name = "Nitesh";
let username = 'nitesh';
let oldUser = `nitesh-nitesh`;
console.log(
    `all about use is name:${name}, currentUserName:${username}, oldUserName:${oldUser}`
);

    // number
let age = 12;
let userScore = 987;
let decimalNum = 12344.67;

    // boolean
let isAdmin = false;
let isGoodBoy = true;

    // null
let about = null;

    // undefined
let aboutSchool = undefined;

    // bigInt
let byNum = 1345674665n;
console.log(typeof(byNum));

    // symbol()
// we can create sumbol by symbol constructor

let userIda = Symbol("4564dfd3434f45gi");
let userIdb  = Symbol("32342i9i0mn3428");

}

{
    // objects
let profile = {
    "name":"nitesh",
    "email": "nitesh@gmail.com"
}

Object.freeze(profile); // it freeze the profile object
console.log(typeof(profile));
console.table([profile]);
console.log(Object.isFrozen(profile));
profile.name = "nitesh2"; // not effect
delete profile.name; //not effects

console.log(profile.name);
// after the freeze an Object we cannot change the value of them


let otherProfile = {
    "name":"karam",
    "email": "karam@gmail.com"
}
Object.seal(otherProfile);
delete otherProfile.name; // not effects
otherProfile.name = "dharam"; // it works and change "karam" => "dharam"
console.table([otherProfile])
}