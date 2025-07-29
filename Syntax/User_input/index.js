// How to accept user input in JavaScript

/*
    1. Easy way: Window prompt
    2. Professional way: HTML textbox
*/

/* Easy way
let username;

username = window.prompt("What is your username?");

console.log(username);
*/

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}