var x = 12;
console.log(x);
// question add two integers

// let a = 10;
// let b = 20;

let a = 10;
let b = "20";
console.log(a + b); // this is not addition it is concationation
console.log(typeof(a + b)); // this is unary operator return the data type of the parsed data

console.log("sum of 10 and 20 is "+ a + b);

console.log("sum of 10 and 20 is "+ (a + +b));
console.log(a + b + " is the sum of 10 and 20 ");

{
    // type coercion
    console.log(1 + "1"); // 11
    console.log(1 - 1); // 0 (type coercion)
    console.log(1 * "1"); // 1 (type coercion)
    console.log(1 / "1"); // 1 (type coercion)
    console.log("1" % 1); // 1 (type coercion)

    // +  operator 2 work karta hai = addition & concationation

}

{
    // how to get value from user using prompt(); this is a function
    let age = Number(prompt("Enter your age.")); 
    console.log(age);

    // the conversion of one datatype into other datatype what we want to this is called "type casting"
}

{
    // swap two variable using three methods
    // first method
    let a = 10, b = 20, c;

    c = a;
    a = b;
    b = c;
    console.log(a, b);

    // second method
    let aa = 10;
    let bb = 20;

    aa = aa + bb;
    bb = aa - bb;
    aa = aa - bb;

    // third method
    let aaa = 10;
    let bbb = 20;

    [aaa, bbb] = [bbb, aaa];

}

{
    // math objects
    console.log(Math.floor(12 / 5));
    console.log(Math.floor(7 % 2)); // 1
    console.log(Math.floor(2 % 7)); // 2

    // sum of digit
    let a = 1232; // 1 + 2 + 3 + 2
}

