// while loop = repeat some code WHILE condition is true

let username = "";

/*while (username === "" || username === null){
    username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`);*/

/* do while loop
    do{
        username = window.prompt(`Enter your name`);
    }while (username === "" || username === null)
*/

let loggedIn = false;
let username2;
let password;

while(!loggedIn){
    username2 = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if(username2 === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!")
    }
    else{
        console.log("Invalid credentials")
    }
}