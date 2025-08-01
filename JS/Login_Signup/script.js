let nameInputDiv = document.querySelector(".usernamefield");
let loginBtn = document.querySelector("#login-btn");
let underline = document.querySelector(".underline");
let signupBtn = document.querySelector("#signup-btn");

loginBtn.addEventListener("click", function(){
    nameInputDiv.style.display = "none"   
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
    underline.style.marginLeft = "auto"
})

signupBtn.addEventListener("click", function(){
    nameInputDiv.style.display = "block"   
    loginBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    underline.style.marginLeft = "0"
})