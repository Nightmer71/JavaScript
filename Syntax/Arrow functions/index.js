/*

Arrow functions: a concise way to write function expressions

Good for simple functions that you use only once
(parameters) => some code

*/

// Example 1
/* const hello = (name, age) => {console.log(`Hello ${name}!`) 
    console.log(`You are ${age} years old!`)};

hello("Aron", 21);*/

// Example 2
// setTimeout(() => console.log("Hello!"), 3000);

// Example 3
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

const sumNums = numbers.reduce((previous, next) => previous + next);
console.log(sumNums);