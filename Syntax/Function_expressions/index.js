/*

function declaration: define a reusable block of code that performs a specific task

function expressions: a way to define functions as values or variables

*/

// function declaration:

function hello1(){
    console.log("Hello!");
}

// function expression:

const hello2 = function(){
    console.log("Hello!");
}
hello2();

/* setTimeout(function(){
    console.log("Hello World!")
}, 3000); */


const numbers = [1, 2, 3, 4, 5, 6];

const squeares = numbers.map(function(elements){
    return Math.pow(elements, 2);
})
console.log(squeares);

const cubes = numbers.map(function(elements){
    return Math.pow(elements, 3);
})
console.log(cubes);

const evens = numbers.filter(function(elements){
    return elements % 2 === 0;
})
console.log(evens);

const odds = numbers.filter(function(elements){
    return elements % 2 !== 0;
})
console.log(odds);

const total = numbers.reduce(function(previous, next){
    return previous + next;
})
console.log(total);