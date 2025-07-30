// Patterns Programming inprove our logic thinking and loops concepts
const prompt = require("prompt-sync")();
let userInp = +prompt("user_input: ");

// very normal
// for(let i = 1; i <= userInp; i++){
//     for(let j = 1; j <= userInp; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// right-angled triangle

// for(let i = 1; i <= userInp; i++){
//     for(let j = 1; j <= i; j++){
// process.stdout.write("*")
//     }
//     console.log()
// }

// Inverted triagle
// for(let i = 1; i <= userInp; i++){
    // for(let j = userInp; j >= i; j--){
        // process.stdout.write("*")
    // }
    // console.log();
// }

// Right-angled tringle
let ascii = 65;
for(let i = 1; i <= userInp; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write(`${String.fromCharCode(ascii)}`)
    }
    console.log();
    ascii++
}