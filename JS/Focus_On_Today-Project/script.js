const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");

checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener("click", function(e){
        let isInputFieldFilled = [...inputFields].every((input)=>{
            return input.value;
        }) 

        if (isInputFieldFilled) checkbox.parentElement.classList.toggle("completed");
        else progressBar.classList.add("show-error");
    })
})

inputFields.forEach((input)=>{
    input.addEventListener("focus", function(e){
        progressBar.classList.remove("show-error");
    })
})