
    // variables
    let count = 0;
    let counter = document.querySelector("#coutner");
    let increase = document.querySelector("#increase");
    let decrease = document.querySelector("#decrease");
    let reset = document.querySelector("#reset");
    let givenValue = document.querySelector("#givenValue");
    increase.addEventListener("click", function(){
        count += parseInt(givenValue.value);
        counter.textContent = count;
    });
    decrease.addEventListener("click", function(){ 
        count -= parseInt(givenValue.value);
        counter.textContent = count;
    });
    reset.addEventListener("click", function(){
        if(confirm("Are, you sure you want to reset counter ?")){
            count = 0;
            counter.textContent = count;
        }
    });
window.addEventListener("keyup", function (event) {
    event.key === "+" ? increase.click() : event.key === "-" ? decrease.click():"";
})