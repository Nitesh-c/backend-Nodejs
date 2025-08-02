let nameInputDiv = document.querySelector(".usernamefield");
let loginBtn = document.querySelector("#login-btn");
let signupBtn = document.querySelector("#signup-btn");
let submitBtn = document.querySelector("#submitbtn");
let heading = document.querySelector("#page-heading");
let underline = document.querySelector(".underline");
let form = document.querySelector("form");

let emailErr = document.querySelector(".email-errorMessage");
// Switch to Login mode
loginBtn.addEventListener("click", function () {
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
    underline.style.transform = "translateX(100%)";
    nameInputDiv.style.height = "0px";
    heading.style.opacity = 0;
    setTimeout(() => {
        heading.style.opacity = 1;
        heading.textContent = "Sign In";
    }, 500);
});

// Switch to Signup mode
signupBtn.addEventListener("click", function () {
    loginBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    underline.style.transform = "translateX(0%)";
    nameInputDiv.style.height = "3rem";
    heading.style.opacity = 0;
    setTimeout(() => {
        heading.style.opacity = 1;
        heading.textContent = "Sign Up";
    }, 500);
});

// Prevent default form behavior
form.addEventListener("submit", function (event) {
    event.preventDefault();
});

// Form submission validation
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let username = document.querySelector("#usernameInput").value.trim();
    let email = document.querySelector("#emailInput").value.trim();
    let password = document.querySelector("#passwordInput").value.trim();

    // Clear previous errors
    emailErr.textContent = "";

    // Validate based on mode
    if (!signupBtn.classList.contains("disable")) {
        // Sign Up Mode
        if (email.length >= 5 && email.includes("@")) {
            emailErr.textContent = "✅ Email looks good!";
        } else {
            emailErr.textContent = "❌ Please enter a valid email!";
        }

    } else if (!loginBtn.classList.contains("disable")) {
        // Login Mode
        if (email.length >= 5 && email.includes("@")) {
            emailErr.textContent = "✅";
        } else {
            emailErr.textContent = "❌ Invalid login email!";
        }

    } else {
        alert("Please choose Login or Signup");
    }
});
