/*

- - - - * - - - - - 
- - - * * * - - - - 
- - * * * * * - - - 
- * * * * * * * - - 
* * * * * * * * * - 

this pattern is the howework
*/

let colums = 5;

for(let i = 1; i <= colums; i++){
    for(let j = i; j < colums; j++){
        process.stdout.write(" ")
    }
    for(let k = 1; k <= i; k++){
        process.stdout.write("*")
    }
    for(let k = 1; k <= i; k++){
        process.stdout.write("*")
    }
    for(let l = i; l < colums; l++){
        process.stdout.write(" ")
    } 
    console.log();
}