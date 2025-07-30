// Patterns Programming inprove our logic thinking and loops concepts
const prompt = require("prompt-sync")();
let userInp = +prompt("user_input: ");

// very normal
for(let i = 1; i <= userInp; i++){
    for(let j = 1; j <= userInp; j++){
        process.stdout.write("*")
    }
    console.log();
}