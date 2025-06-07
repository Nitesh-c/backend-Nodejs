// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// request.onload = function() {
  // const responseData = JSON.parse(request.responseText);
  // console.log(responseData);
  // console.log(JSON.parse(request.responseText));
  // console.log(this.responseURL);
  // console.log(this.responseText);
  // console.log(this.responseXML);
// }
// request.send();



// let make a callback hell
function  sendRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
 xhr.onload = function () {
    return (JSON.parse(xhr.responseText))
 }
  xhr.send();

}

let myData = sendRequest('https://dummyjson.com/users', () => {})
console.log(myData);


