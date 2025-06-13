// arrow function 
let myFunc = (x)=> (x * x);

// default params
function userLoginMessage(userName = "sam"){
    console.log(`Hello ${userName} Welcome`);
}

userLoginMessage("admin")

// this is how we copy the object in deep
let userProfile = {
    "name": "nitesh", 
    "email": "niteshbhai123@gmail.com",
    "password": "nitesh123"
}

let cloneUserProfile = Object.values(userProfile);
cloneUserProfile.name = "karam";
console.log(cloneUserProfile.name);
console.log(userProfile.name);


// spread operator 
let name = "nitesh"
let weiredName = [...name];
console.log(weiredName);


// destructuring

let adminUser = {
    "name":"nitesh",
    "email":"nitesh@google.com"
}

let {"name":userName, email: userMail} = adminUser;  
// here we can acces the value using the userName and userMail
console.table([userName, userMail]);


// module got the module_File1 and module_File2