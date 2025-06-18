// AJAX is not a programmin language it a format to get data from the database and apis
/*
status code
    200 ok
    learn more from :- https://www.restapitutorial.com/httpstatuscodes
*/

const btn1 = document.querySelector('button');

btn1.addEventListener('click', function (){
    let xhr = new XMLHttpRequest();
    // get data from the data.txt file
    xhr.open("GET", "./data.txt", true)

    xhr.send()

    xhr.onprogress = function(){
        console.log("loding...")
    }

    xhr.onload = function (){
        console.log(xhr.responseText)
    }
})