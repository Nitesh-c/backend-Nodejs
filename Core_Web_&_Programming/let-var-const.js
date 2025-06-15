// In this section I learn about = "let", "var", "const" and temporal dead zone

console.log(b); // it give output of undefined because of hositing (access the variable after the initilization=starts)

// but in the case of let its different
let a = 12;
var b = 12;
// var is defined as a window object in the javascript
// let is not defined as the window object in javascript
