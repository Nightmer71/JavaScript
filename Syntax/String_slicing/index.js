// string slicing = creating a substring from a portion of another string
// string.slice(start, end);

const fullName = "Tóth Áron";

// let firstName = fullName.slice(5);
// let lastName = fullName.slice(0, 4);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

let firstName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);

let lastName = fullName.slice(0, fullName.indexOf(" "));
console.log(lastName);
