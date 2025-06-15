const icon = document.getElementById("eye-icon");
icon.addEventListener('click', function () {

    icon.src = "./images/eye-password-show.svg";
    document.querySelector("#password").type = 'text';
    
    setTimeout(()=>{
    icon.src = "./images/eye-password-hide.svg";
    document.querySelector("#password").type = 'password';
    }, 4000);
    
});