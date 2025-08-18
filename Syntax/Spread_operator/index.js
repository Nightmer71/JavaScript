/*
spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)
*/

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = "Toth Aron";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple", "banana", "orange"];
let vegatbles = ["carrots", "celery", "potato"];
let newFoods = [...fruits, ...vegatbles, "eggs", "milk"];
console.log(newFoods);