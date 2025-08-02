let nameInputDiv = document.querySelector(".usernamefield");
let loginBtn = document.querySelector("#login-btn");
let underline = document.querySelector(".underline");
let signupBtn = document.querySelector("#signup-btn");
let heading = document.querySelector("#page-heading");

loginBtn.addEventListener("click", function(){
    signupBtn.classList.add("disable");
    underline.style.transform = "translateX(100%)"
    loginBtn.classList.remove("disable");
    nameInputDiv.style.height = "0px";
    nameInputDiv.style.overflow = "hidden";
    heading.style.opacity = 0;
    setTimeout(()=>{
        heading.style.opacity = 1;
        heading.textContent = "Sign In"
    }, 500);
    loginClickCount++
})

signupBtn.addEventListener("click", function(){
    loginBtn.classList.add("disable");
    underline.style.transform = "translateX(0%)"
    signupBtn.classList.remove("disable");
    nameInputDiv.style.height = "3rem";
    nameInputDiv.style.overflow = "hidden";
    heading.style.opacity = 0;
    setTimeout(()=>{
        heading.style.opacity = 1;
        heading.textContent = "Sign Up"
    }, 500)
})

