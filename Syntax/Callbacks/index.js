/*

callback: a function that is passed as an argument to another function.

Used to handle asynchronus operations:
    - Reading a file
    - Network request
    - Interacting with databases

"Hey when you are done, call this next"

*/

// Example 2
sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}


// Example 1
function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}