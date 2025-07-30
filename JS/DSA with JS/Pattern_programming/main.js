// console.log("hello");
// console.log("world");


let prompt =  require('prompt-sync')();
let n = +prompt("Enter you number: ")
// process.stdout.write("Hello");

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log();
// }

// for(let i = 1; i <= n; i++){
//     let ascii = 65;
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(`${String.fromCharCode(ascii)} `);
//         ascii++;
//     }
//     console.log();
// }


// for(let i = 1; i <= n; i++){
//         for(let j = 1; j <= i; j++){
//             process.stdout.write(`${} `);
//             ascii++;
//         }
//         console.log();
// }

for(let i = 1; i <= n; i++){
    for(let j = n; j >= n; j--){
            process.stdout.write(`* `);
    }
    console.log();
}