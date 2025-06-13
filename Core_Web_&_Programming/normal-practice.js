// Let's practice by own -

let name = "nitesh"
// let reverseName = name.reverse();
let reverseName = name.split("").reverse().join("");

console.log(reverseName);
console.log(name);

// that it solve


let gamesName = ["ludo", "cheese", "cricket", "hockey", "football"];
let smallLengthGames = gamesName.filter((game)=> game.length >= 5);
console.log(smallLengthGames);


let allDuplicateGames = [...gamesName]; // this is spread operator

function sum(num = 1, num2 = 34){
    console.log(`If you are not give any value as the second argument I will replace with ${num2}`)
    return num + num2;
}

console.log(sum(12,0));
console.log(sum(12));
