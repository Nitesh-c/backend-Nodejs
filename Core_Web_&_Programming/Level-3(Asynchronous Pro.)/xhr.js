const xhr = new XMLHttpRequest();
xhr.responseType = JSON;
xhr.addEventListener("load",()=>{
  console.log(xhr)
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.send();

console.log("Hello");