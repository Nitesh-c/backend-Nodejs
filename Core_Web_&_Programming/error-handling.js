// try 
// catch
// finllay

try{
// let's make some error
console.log(c);

}
catch(error){
    console.error("error is here")
}

finally{
    console.log("this code is running from finally block")
}

//can we make own error by
throw new Error("this is my own error");