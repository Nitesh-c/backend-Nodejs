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
let weiredNum = 1233;
console.log(weiredNum.toFixed(9));


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
console.clear();

// Arrays
{
    let myBestFriends = ["pritam", "karam", "dharam", "i-own"];
    console.log(myBestFriends[myBestFriends.length-1])
    let someNums = [1,2,3,4,5,6,7,8,9,10];

// let find sum using reduce method
    let totalOfNums = someNums.reduce((accum, curr)=> {return accum + curr});
    // let totalOfNums = someNums.reduce((accum, curr)=>  accum + curr);
    console.log(totalOfNums);

// map
    let name = myBestFriends[0];
    let fancyName = name.split("");
    console.log(fancyName);

let final = fancyName.map((l)=> l+"!")
console.log(final);

// filter

let oddNums = [1,3,5,7,9,11];
    console.log(oddNums.filter((num)=> num>=5));
}


console.clear()
// variable
{
function square(num){
    let result = (num*num);
    return result;
}
// console.log(result); // error !
console.log(square(34))

var score = 12;
console.log(score)

const score2 = 32;
console.log(score2);


// for learing more about let, const, var => https://www.w3schools.com/js/js_variables.asp
}

console.clear()
// operators
{
    console.log( 2 + 2 );
    console.log( 2 - 1 );
    console.log( 2 * 3 );
    console.log( 2 % 2 );
    console.log( undefined || 2 );
    
    /*
"" = false;
" " = true;
1 = true;
0 = false;
null = false;
undefined = false;
    */

console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));

// falsy values = 0, 0-, false, "", undefined, null, 0n

if(0 || -0 || false || "" || undefined || null || 0n){
    console.log("I am bad"); // this code is never execute
}else{
    console.log("Jai shree Ram"); // always this code is execute
}
   
// conversion
let someVariable = 0;
// let someVariable = 1;

console.log(Boolean(someVariable));

console.log("hello world".toString());
let num = 12;
console.log(num.toString());
// let weiredNum = 1233;
// console.log(weiredNum.toFixed(9));
}