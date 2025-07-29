/* 
    Container that stores a value
    1. declaration: let x;
    2. assignment:  x = 100;
    3. declaration and assignment together: let x = 100;
*/
// --------------------------------
// Strings

let firstName = 'Áron';
let favouriteFood = 'Pasta';
let email = 'áron@gmail.com'

console.log(typeof firstName);
console.log(firstName);
console.log(`Your first name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);

// --------------------------------
// Numbers
let age = 20;
let price = 10.99;
let gpa = 2.1;


console.log(price);
console.log(gpa);

console.log(`Your gpa is ${gpa}`);
console.log(`The price is $${price}`);
console.log(`You are ${age} years old`);
// Csak akkor műkodik, ha a string a ` jellel van körbevéve

console.log(typeof age)
// Kiírja a változó típusát a konzolra

// --------------------------------
// Booleans
let online = true;
let forSale = true;
let isStudent = false;

console.log(typeof online);
console.log(`Áron is online: ${online}`);
console.log(`Is this car for sale? ${forSale}`)
console.log(`Enrolled: ${isStudent}`);

// --------------------------------
// Displaying variables on the webpage

let fullName = 'Tóth Áron';
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Are you enrolled? ${student}`;

