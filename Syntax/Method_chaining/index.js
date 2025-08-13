/* 
Method chainig:
    Calling one method after another in one line of code
*/

let username = window.prompt("Enter your username: ");

// No method chaining:

/*username = username.trim;
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();
username = letter + extraChar;

console.log(username);*/

// Method chaining:
username = username.trim().charAt(0).toUpperCase() + 
            username.trim().slice(1).toLowerCase();

console.log(username);