const xhr = new XMLHttpRequest();

xhr.open("GET", "https://countriesnow.space/api/v0.1/countries/");
xhr.send();
xhr.addEventListener ("load", function (){

    let container = document.getElementById("country-container");
    let response = JSON.parse(xhr.responseText);
    if(response.error === false && response.data){
        console.log("data is successfully fetched");
        container.innerHTML = `
        <div>
        <p>Country Name : ${response.data[96].country}</p>
        </div>
        `

    }else{
        console.error("test failed ✅")
    }

})
