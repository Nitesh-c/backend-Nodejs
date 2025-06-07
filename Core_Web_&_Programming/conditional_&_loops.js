// here i start loops and conditions and solve the question

// Write a JavaScript if statement that checks if a number is positive.
let number = [1, 3,5, 6, -98, 54, 0, -2, 43, -54]
for(let i = 0; i < number.length; i++){
    if( number[i] >= 0 ){
        console.log(`positive found ${i+1}: ${number[i]}`);
    }
}


// Write a JavaScript program to check if a number is even or odd.

let num = 34;
if ( !isNaN( num ) ){
    if ( num % 2 === 0 ){
console.log(`Give number is Even`);
    }else{
console.log(`Give number is Odd`);
    }
}else{
    console.warn("Type Error! please enter number(positive number)");
}

// Use an if-else statement to determine whether a user is eligible to vote (age >= 18).
let userAge = 12;
if(!isNaN(userAge)){
    if(userAge >= 18){
console.log(`Your age: ${userAge} you are eligible`);
    }else{
        console.warn(`Your age: ${userAge} you are NOT eligible`);
    }
}else{
    console.warn(`Please enter you age and it is not in negative.`);
}

// Write a loop that prints numbers from 1 to 10.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Using a for loop, calculate the sum of numbers from 1 to 100.
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(`The sum of 1 to 100 is ${sum}.`);

// Write a while loop that prints numbers from 10 down to 1.
let i = 10;
while(i >= 1){
    console.log(i);
    i--
}

// Use a switch statement to print the day of the week based on a number (1-7).

const day = 3;
switch(day){
    case  1:
        console.log("Sunday");
        break;
    case  2:
        console.log("Monday");
        break;
    case  3:
        console.log("Tuesday")
        break;
    case  4:
        console.log("Wednesday")
        break;
    case  5:
        console.log("Thursday")
        break;
    case  6:
        console.log("Friday");
        break;
    case  7:
        console.log("Saturday");
        break;
    default :
        console.warn("Invalid input please enter number between 1 to 7");   
}

console.clear()

// Write a program that prints all even numbers between 1 and 50 using a loop.
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(`Even = ${i}`);
    }
}


// Write a JavaScript function that checks whether a given year is a leap year or not.
let year = 2024;
if(year % 4 === 0 && year % 100 !== 0){
    console.log(`Leap year ${year}`);
}else{
    console.warn(`NOT Leap year ${year}`);
}

// Use a loop to reverse a string.
let string = "niteshMitra";
let splitedVal = string.split("");
let reverseValue = [];
for (let i = (string.length-1); i >= 0; i--){
    reverseValue.push(splitedVal[i]);
}
console.log(reverseValue.join(""));

console.clear()
// Create a multiplication table for a given number using a for loop.
let tableOfNum = 3;
for(let i = 1; i <= 10; i++){
    console.log(`${tableOfNum} * ${i} = ${tableOfNum * i}`)
}

console.clear()
// Write a program that finds the factorial of a given number using a loop.
let giveNum = 12;
let toogle = true;
for(let i = 2; i <= giveNum; i++){
    if(toogle){
        console.log(`First factor of ${giveNum} is 0.`);
        console.log(`First factor of ${giveNum} is 1.`);
        toogle = false;
    }
    if(giveNum % i === 0){
        console.log(`First factor of ${giveNum} is ${i}.`)
    }
}
// Write a program that finds all prime numbers between 1 and 100.